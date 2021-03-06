import userRoutes from "./users-routes.js";
import authRoutes from "./auth-routes.js";
import movieRoutes from "./movies-routes.js";
import genderRoutes from "./genders-routes.js";

export const renderRoutes = [
  {
    method: "GET",
    url: "/health",
    handler: (_, res) => {
      res.status(200).send();
    },
  },
  ...Object.values(userRoutes),
  ...Object.values(authRoutes),
  ...Object.values(movieRoutes),
  ...Object.values(genderRoutes),
];

export default (fastify, opts, next) => {
  fastify.decorateRequest("user", null);

  fastify.addHook("onRequest", (req, res, next) => {
    console.log("onRequest");
    req.user = null;
    next();
  });
  for (let route of renderRoutes) {
    fastify.route(route);
  }
  next();
};
