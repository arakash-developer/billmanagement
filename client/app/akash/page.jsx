const page = async () => {
    let response = await fetch("https://billmanagement-server.vercel.app/bills", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
        credentials: "include", // Ensures cookies are sent with the request
    })
    let blobs = await response.json()
    console.log(blobs)
  return (
    <>
      <div className="m-72">
        {/* <h1>{blobs.result}</h1> */}
        <h1>{blobs.messege}</h1>
      </div>
    </>
  );
};

export default page;
