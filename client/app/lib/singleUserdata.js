let singleUserdata = async (token, setData, setLoading) => {
    try {
        setLoading(true)
        let blobs = await fetch("https://billmanagement-server.vercel.app/profileSettingUpdate", {
            headers: {
                "token": token ? token : "",
            }
        })
        let response = await blobs.json();
        return response.user
    } catch (error) {
        console.log(error.message);
    } finally {
        // setLoading(false)
    }
}
export default singleUserdata