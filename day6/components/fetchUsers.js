
async function fetchUser(user){
    
    const data = await fetch(`https://api.github.com/users/${user}`);
    const res = await data.json();
    console.log(res);
    return res;
};

export default fetchUser;