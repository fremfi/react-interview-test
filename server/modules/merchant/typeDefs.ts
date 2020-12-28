import { gql } from 'apollo-server-express';

export default gql`
    scalar Date
    type Merchant {
        index: Int
        guid: String
        logo: String
        dateCreated: String
        publishedState: Boolean
        brands: [String]
        merchant: String
        products: [Product]
        commissionFee: String
        contactEmail: String
        phone: String
        address: String
        publishedDate: String
        publishedBy: User
        companyDescription: String
    }
    type Product {
        belongsToBrand: Int
        id: String
        name: String
        price: Float
        description: String
        color: String
        size: String
        quantity: Int
        image: String
    }
    type User {
        _id: String
        name: String
        email: String
    }
    type Query {
        merchants: [Merchant!]!
        cart: CartResponse!
        orders: GetOrdersResponse!
        user: User
    }
    type CartItem {
        id: String
        name: String
        image: String
        price: Float
        quantity: Int
    }
    type OrderItem {
        id: String
        name: String
        image: String
        price: Float
        quantity: Int
    }
    type Cart {
        _id: String
        userId: String
        items: [CartItem]
    }
    type CartResponse {
        success: Boolean!
        message: String
        cart: Cart
    }
    type Order {
        _id: String!
        userId: String
        orderDate: Date
        status: String
        shippedDate: String
        orderItems: [OrderItem]!
    }
    type CreateOrderResponse {
        success: Boolean!
        message: String
    }
    type GetOrdersResponse {
        success: Boolean!
        orders: [Order]
    }
    type AuthResponse {
        token: String
        name: String
    }
    type Mutation {
        addToCart(productId: String!, quantity: Int!): CartResponse!
        updateCart(productId: String!, quantity: Int!): CartResponse!
        createOrder: CreateOrderResponse!
        authGoogle(accessToken: String!): AuthResponse!
    }
`;