export async function getAllPosts() {
    try {
      let result = await fetch("https://dummyjson.com/posts");
      if (!result.ok) {
        throw new Error("Fetch failure");
      }
      let json = await result.json();
      return json;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getAllComments() {
    try {
      let result = await fetch("https://dummyjson.com/comments");
      if (!result.ok) {
        throw new Error("Fetch failure");
      }
      let json = await result.json();
      return json;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getAllUsers() {
    try {
      let result = await fetch("https://dummyjson.com/users");
      if (!result.ok) {
        throw new Error("Fetch failure");
      }
      let json = await result.json();
      return json;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getOnePosts({ id }) {
    let result = await fetch(`https://dummyjson.com/posts/${id}`);
    let json = await result.json();
    return json;
  }
  
  export async function createANewPost(title, body, id, firstName, lastName) {
    try {
      let result = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Id: id,
          title: title,
          body: body,
          userId: id,
          firstName: firstName,
          lastName: lastName,
        }),
      });
      if (!result.ok) {
        throw new Error("Fetch failure");
      }
      let json = await result.json();
      return json;
    } catch (error) {
      throw error;
    }
  }
  
  export async function addAComment(body, name, id) {
    try {
      let result = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 151,
          body: body,
          postId: 62,
          userId: id,
          userUsername: name,
        }),
      });
      if (!result.ok) {
        throw new Error("Fetch failure");
      }
      let json = await result.json();
      return json;
    } catch (error) {
      throw error;
    }
  }
  