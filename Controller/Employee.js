const getData = (req,res)=>{
    const data = [
        {
            name:"person1"
        },
        {
            name:"person2"
        },
        {
            name:"person3"
        },
        {
            name:"person4"
        }
    ]
    res.send(data)
}
module.exports = getData;