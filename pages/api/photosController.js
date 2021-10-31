import { client } from "../../Authorization/auth";


export default function photoController(req,res){
    if(req.method==='GET'){
        searchPhoto(req,res)
    }
    
}

// function getAllPhotos(req,res){
// return res.status(200).json(client.photos)
// }

function searchPhoto(req,res){
const query=req;
client.photos.search({query,per_page:10})
    .then(photos=>{res.json(photos)})
    .catch(err => res.status(500).send(err))
}
   
    

