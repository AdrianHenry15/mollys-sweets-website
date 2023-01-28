import express, { Express } from "express"
import cors from "cors"
import todoRoutes from "./routes"
const { authMiddleware } = require("./utils/auth")
const { graphqlUploadExpress } = require("graphql-upload")
const { ApolloServer } = require("apollo-server-express")
const db = require("./config/connection")
const path = require("path")

const app: Express = express()

//graphql image and data collection
app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 1 }))

app.use(cors())
app.use(todoRoutes)

const PORT = process.env.PORT || 3001

//apollo server for graphql
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
})

// service worker
app.get("/service-worker.js", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "public", "../client/src/service-worker.js")
  )
})

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs: any, resolvers: any) => {
  await server.start()
  server.applyMiddleware({ app })

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`)
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      )
    })
  })
}

// Call the async function to start the server
startApolloServer(typeDefs, resolvers)
