const express =require('express');

const router =express.Router();

// router.get('/',(req,res)=>{
//     res.send("tools found")
// });
// router.post('/tools',(req,res)=>{
//     res.send("tools post")
// });





router
    .route("/")
    /**
     * @api {get} /tools All tools
     * @apiDescription Get all the tools
     * @apiPermission admin
     *
     * @apiHeader {String} Authorization   User's access token
     *
     * @apiParam  {Number{1-}}         [page=1]     List page
     * @apiParam  {Number{1-100}}      [limit=10]  Users per page
     *
     * @apiSuccess {Object[]} all the tools.
     *
     * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
     * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
    */
    .get((req,res)=>{
        res.send("tools found 2")
    })

    /**
   * @api {post} /tools save a tool
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
    .post((req,res)=>{
        res.send("tools post")
    })


module.exports =router; //default export
