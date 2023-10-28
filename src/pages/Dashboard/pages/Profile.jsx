import { CgAddR } from "react-icons/cg";

const Profile = () => {
    return (
        <div className="ml-10 font-red">
            <div className="w-[70%] bg-white rounded-lg p-7 mb-8 shadow-xl">
                <h5 className="mb-6">User Profile</h5>
                <div className="flex items-center space-x-12 mb-16">
                    <article>
                        <h5 className="text-[#393939] text-[14px] mb-2">FULL NAME</h5>
                        <p className="text-[18px] text-[#111111]">Maria Don</p>
                    </article>
                    <article>
                        <h5 className="text-[#393939] text-[14px] mb-2">BUSINESS NAME</h5>
                        <p className="text-[18px] text-[#111111]">Merry Gadget Stores</p>
                    </article>
                    <article>
                        <h5 className="text-[#393939] text-[14px] mb-2">BUSINESS EMAIL ADDRESS</h5>
                        <p className="text-[18px] text-[#111111]">merrygadgetstores@gmail.com</p>
                    </article>
                </div>
                <div className="bg-green cursor-pointer px-5 py4 h-[3rem] text-white flex items-center space-x-2 w-fit rounded-lg">
                    <CgAddR />
                    <span>Add Account</span>
                </div>
            </div>
            <div className="w-[70%] bg-white rounded-lg p-7 mb-8 shadow-xl">
                <h5 className="mb-6">User Settings</h5>
                <div className="flex divide-y flex-col mb-16">
                    <div className="px-3 py-5 hover:bg-gray-50 cursor-pointer">
                        <p>Change Email Address </p>
                    </div>
                    <div className="px-3 pt-5 hover:bg-gray-50 cursor-pointer">
                        <p>Change Password </p>
                    </div>
                </div>
            </div>
            <div className="w-[70%] bg-white rounded-lg p-7 mb-8 shadow-xl">
                <h5 className="mb-6">Notification</h5>
                <div className="flex items-center space-x-12 mb-16">
                    <article>
                        <h5 className="text-[#393939] text-[14px] mb-2">FULL NAME</h5>
                        <p className="text-[18px] text-[#111111]">Maria Don</p>
                    </article>
                    <article>
                        <h5 className="text-[#393939] text-[14px] mb-2">BUSINESS NAME</h5>
                        <p className="text-[18px] text-[#111111]">Merry Gadget Stores</p>
                    </article>
                    <article>
                        <h5 className="text-[#393939] text-[14px] mb-2">BUSINESS EMAIL ADDRESS</h5>
                        <p className="text-[18px] text-[#111111]">merrygadgetstores@gmail.com</p>
                    </article>
                </div>
                <div className="bg-green cursor-pointer px-5 py4 h-[3rem] text-white flex items-center space-x-2 w-fit rounded-lg">
                    <CgAddR />
                    <span>Add Account</span>
                </div>
            </div>
        </div>
    )
}

export default Profile;