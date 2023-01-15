import path from "node:path";
const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLUpload } = require("graphql-upload");
const fs = require("node:fs");
require("dotenv").config();
