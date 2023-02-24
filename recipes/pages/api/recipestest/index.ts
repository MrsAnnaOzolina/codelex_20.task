import clientPromise from "../../../lib/mongo/mongodb";

export default async function handler(req: Request, res: Response) {
  const client = await clientPromise;
  const db = client.db("MyRecipes");
  switch (req.method) {
    // case "POST":
    //   let bodyObject = JSON.parse(req.body);
    //   let myPost = await db.collection("posts").insertOne(bodyObject);
    //   res.json(myPost.ops[0]);
    //   break;
    case "GET":
      const allPosts = await db.collection("MyRecipes").find({}).toArray();
      res.json(data:allPosts);
      break;
  }
}

export async function getServerSideProps(context) {
    let res = await fetch("http://localhost:3000/api/recipes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let allPosts = await res.json();
  
    return {
      props: { allPosts },
    };
  }
  