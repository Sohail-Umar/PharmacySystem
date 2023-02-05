const OrderModel = require("../modals/orderModel")
const ProductModel = require("../modals/productModel")


const createOrder = async (req, res) => {
  var newProduct;
  await Promise.all(req.body.product_id.map(async (product) => {
    newProduct = await ProductModel.findById(product.id);

  }));
  OrderModel.findOne({ user_id: req.body.user_id, status: "pending" }, (err, existingOrder) => {
    if (err) {
      return res.status(400).json({ success: false });
    }

    if (existingOrder) {
      existingOrder.price += newProduct.price;
      // console.log("updatedOrderPRice:", existingOrder.price)
      existingOrder.product_id.push(newProduct);

      existingOrder.save((err, updatedOrder) => {
        if (err) {
          return res.status(400).json({ success: false });
        }
        res.json(updatedOrder);
      });
    } else {
      try {
        let orderPrice = 0;
        const newOrder = new OrderModel({
          user_id: req.body.user_id,
          status: req.body.status
        });
        Promise.all(req.body.product_id.map(async (product) => {
          const newProduct = await ProductModel.findById(product.id);
          orderPrice += newProduct.price;
          newOrder.product_id.push(newProduct);
        }));
        newOrder.price = orderPrice;
        newOrder.save().then(res => res.status(200).json(newOrder)).catch(err => res.status(401).json(err));
        // res.status(200).json(newOrder);
      } catch (error) {
        res.status(401).json({ message: 'Error creating order', error });
      }
    }
  })
};


const removeFromCart = async (req, res) => {
  // console.log("req", req.body)
  OrderModel.findOne({ user_id: req.body.user_id, status: "pending" }, (err, existingOrder) => {
    if (err) {
      return res.status(400).json({ success: false });
    }

    if (existingOrder) {
      const newCartArray = existingOrder.product_id.filter((value) => value != req.body.product_id);

      existingOrder.price -= req.body.price

      console.log("newCArtArray: ", newCartArray)
      existingOrder.product_id = newCartArray
      existingOrder.save((err, updatedOrder) => {
        if (err) {
          return res.status(400).json({ success: false });
        }
        res.json(updatedOrder);
      })
    }
  })
}





const addProductinOrder = async (req, res) => {
  try {
    const { user_id, item } = req.body;
    // retrieve the order associated with the user's account
    OrderModel.findOne({ user: user_id }, (err, order) => {
      if (err) return res.status(400).send(err);
      // add item to the order
      // order.items.push(item);
      order.save((err, updatedOrder) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(updatedOrder);
      });
    });
  } catch (error) {
    res.status(400).error("error in backend", error)
  }
}

const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = ProductModel.findByIdAndDelete(req.params.id, req.body, {
      new: true,
      // runValidators: true
    })
    res.status(201).json(deletedOrder)
  } catch (error) {
    res.status(401).json(error)
  }
}

// const getPendingOrders = async (req, res) => {
//   try {
//     const { user_id } = req.body
//     const pendingOrders = await OrderModel.find({ user_id: user_id, status: "pending" }).populate("product_id", "product_name price");
//     const updatedOrders = pendingOrders.map(order => {
//       const orderPrice = order.product_id.reduce((total, product) => total + product.price, 0);
//       return { ...order._doc, orderPrice }
//     });
//     res.status(200).json(updatedOrders[0]);
//   } catch (error) {
//     res.status(404).json({ message: 'Orders not found' });
//   }
// };

const getPendingOrders = async (req, res) => {
  console.log('req', req.query)
  try {
    // const id = findById(req.body.user_id)
    const { user_id } = req.query
    const pendingOrders = await OrderModel.find({ user_id: user_id, status: "pending" }).populate("product_id", "product_name price");
    const updatedOrders = pendingOrders.map(order => {
      const orderPrice = order.product_id.reduce((total, product) => total + product.price, 0);
      return { ...order._doc, orderPrice }
    });
    res.status(200).json(updatedOrders[0]);
  } catch (error) {
    res.status(404).json({ message: 'Orders not found' });
  }
};


module.exports = {
  createOrder, deleteOrder
  , getPendingOrders, addProductinOrder
  , removeFromCart
}

// const createOrder = async (req, res) => {
//   try {

//     const newOrder = new OrderModel(req.body);
//     user_id: req.body.user_id,
//       req.body.product_id.forEach(async product => {
//         const newProduct = await ProductModel.findById(product.id);
//         newOrder.product_id.push(newProduct);
//       })
//     status: req.body.status;

//     await newOrder.save()
//     res.status(200).json(newOrder)
//     return
//   } catch (error) {
//     res.status(401).json(error)
//     return
//   }
// }



// const pendingOrder = await OrderModel.find({ status: "pending" }, (err, orders))
// const getPendingOrders = async (req, res) => {
//   try {
//     const orderproductdata = await OrderModel.find({ status: "pending" }).populate("product_id", "product_name price")

//     res.status(201).json(orderproductdata)
//     return
//   } catch (error) {
//     res.status(404).json(error)
//     return
//   }
// }


// const getPendingOrders = async (req, res) => {
//   try {
//     const pendingOrders = await OrderModel.find({ status: "pending" }).populate("product_id", "product_name price")
//     const updatedOrders = pendingOrders.map(order => {
//       const orderPrice = updatedOrders.product_id.reduce((total, product) => total + product.price, 0);
//       return { ...order.price, orderPrice }
//     });
//     res.status(201).json(updatedOrders);
//     return
//   } catch (error) {
//     res.status(402).json(error)
//     return
//   }
// }



