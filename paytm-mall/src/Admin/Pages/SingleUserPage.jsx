import React from 'react'

export const SingleUserPage = () => {
    const singleProductUserPageData = () => {
        axios.get(`https://hilarious-erin-shift.cyclic.app/fashion/${1}`).then((res) => {
      setSingleData(res.data);
    }).catch((err) => {
      console.log(err);
    })
      }
  return (
    <div></div>
  )
}
