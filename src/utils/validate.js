const validate = (email, password) => {

    const emailvalide = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const passwordvalide = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    // if (name == "") return "Name is invalid"
    if (!emailvalide) return "Email Id not valid";
    if (!passwordvalide) return (<small>Password contains one uppercase , special case</small>);


    return (alert("logged in"));


    

}

export default validate;