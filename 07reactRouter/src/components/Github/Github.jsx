import React from 'react'

function Github(){
    useEffect(()=>{
        const[data,setData] = useState([])
        useEffect(()=>{
        fetch("https://api.github.com/users/khushi442")
        .then((res)=>res.json())
        .then(data => console.log(data));
        setData(data)
        })
    },[])
    return(
        <div className='bg-gray-600 text-black text-3xl p-4 m-4 text-center'>Github:Follwrs:{data.followers}
        <img src="{data.avatar_url}" alt="Git picture" width={300} /></div>
    )
}
export default Github