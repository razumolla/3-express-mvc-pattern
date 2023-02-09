let tools=[
    {id:1, name: "razu"},
    {id:2, name: "saju"},
    {id:3, name: "maju"},
    {id:4, name: "baju"}
]
module.exports.getAllTools= (req,res,next)=>{
    // const {ip,query,params,body,headers}=req;
    // console.log(ip,query,params,body,headers);
    
    // res.download(__dirname + "/tools.controller.js" );
    // res.json({"name":"abc"});
    // res.redirect("/login");

    const {limit,page}=req.query;
    console.log(limit, page)

    res.json(tools.slice(0,limit))
}

module.exports.saveATools= (req,res)=>{
    console.log(req.query);
    tools.push(req.body);
    res.send(tools)
}

module.exports.getToolDetail= (req,res)=>{
    const {id}=req.params;
    console.log(id);
    const foundTool=tools.filter(tool=> tool.id == id );
    res.send(foundTool)
}

module.exports.updateTool= (req,res)=>{
    // const newData=req.body;
    const {id}=req.params;
    const filter ={ _id:id }

    const newData= tools.find(tool=> tool.id=== Number(id));
    newData.id=id;
    newData.name=req.body.name;
    
    res.send(newData)
}

module.exports.deleteTool= (req,res)=>{
    const {id}=req.params;
    const filter ={ _id:id }

    tools = tools.filter(tool=> tool.id !== Number(id));
    res.send(tools)
}

