import Button from "../../../../../components/button/Index";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../../../../store/user/userSlice";
//diğer projeden dispatcha bak
export default function Index() {
//   const dispatch = useDispatch();
//   const data =  {
//     id: 3,
//     username: "aaaa",
//     fullName: "SametaedFurkan",
//     avatar: "/images/avatar2.png",
// }

//  const handleSubmit = () => {
//   console.log("data");
//     dispatch(userActions._removeAccount(data.id));
//   }




  return (
    <div className="py-4 w-[90%]">
    <Button  size="large"> Gönder </Button>
    {/* <button onClick={handleSubmit}>ssssssss</button> */}
</div>
  )
}
