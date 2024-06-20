export default function Register(){
    return(
        <div className="container">
            <div className="content">
                <input type="text" placeholder="enter your first name" />
                <input type="text" placeholder="enter your last name "/>
                <select>
                    <option>Admin</option>
                    <option>Employee</option>
                </select>
                <input type="email" placeholder="enter your email" />

                {/* If admin then require special key to login and for special key new input box will be render */}
                <input type="password" placeholder="enter your password"/>
                <input type="password" placeholder="re-enter your password"/>
                <button>Register</button>
            </div>
        </div>
    )
}