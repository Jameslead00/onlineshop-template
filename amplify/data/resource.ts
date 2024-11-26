import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Product: a
    .model({
      name: a.string().required(),
      description: a.string().required(),
      price: a.float().required(),
      order: a.belongsTo("OrderItem", "productId"),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  Order: a
  .model({
      customerId: a.id().required(),
      shippingAddress: a.string().required(),
      quantity: a.integer().required(),
      status: a.string().required(),
      totalAmount: a.float().required(),
      orderDate: a.date().required(),
      orderItems: a.hasMany("OrderItem", "orderId"),
      customer: a.belongsTo("Customer", "customerId"),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  OrderItem: a
  .model({
      orderId: a.string().required(),
      productId: a.string().required(),
      quantity: a.integer().required(),
      priceAtPurchase: a.float().required(),
      order: a.belongsTo("Order", "orderId"),
      product: a.hasOne("Product", "productId"),
  })
  .authorization((allow) => [allow.publicApiKey()]),

  Customer: a
  .model({
      cognitoId: a.id().required(),
      firstName: a.string().required(),
      lastName: a.string().required(),
      order: a.hasMany("Order", "userId"),
      address: a.hasMany("Address", "userId"),
  })
  .authorization((allow) => [allow.publicApiKey()]),

  Address: a
  .model({
      customerId: a.id().required(),
      street: a.string().required(),
      city: a.string().required(),
      state: a.string().required(),
      postalCode: a.string().required(),
      country: a.string().required(),
      user: a.belongsTo("Customer", "customerId"),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});