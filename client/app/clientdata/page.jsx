import React from 'react'
import Container from '../component/layers/Container'

const page = async () => {
  let blobs = await fetch("https://billmanagement-server.vercel.app/clientdata")
  let response = await blobs.json()
  let clients = await response.clientdata;
  // console.log(clients);

  return (
    <Container className='mt-5'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Clients Information :
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Client Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Serial No
              </th>
            </tr>
          </thead>
          <tbody>
            {
              clients?.map((client) => (
                <tr key={client._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  comming
                  </th>
                  <td className="px-6 py-4">
                    {client.name}
                  </td>
                  <td className="px-6 py-4">
                    {client.email}
                  </td>
                  <td className="px-6 py-4">
                    comming
                  </td>
                  <td className="px-6 py-4">
                    comming
                  </td>
                  <td className="px-6 py-4">
                    comming
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>

    </Container>
  )
}

export default page