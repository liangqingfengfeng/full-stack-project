module.exports = app => {
  const { router, controller } = app;
  const apiRouter = router.namespace('/api');

  apiRouter.get('/getApiTest', controller.home.index);
  apiRouter.get('/user', controller.user.find);

  apiRouter.get('/test', controller.user.test);

  // api router 需要放在此之上
  router.get('/*', controller.spa.home);
};
