import React from 'react';  //import react

export default function Form(props){
//THESE ARE THE PRPOS THAT FORM.JS EXPECTS //FROM APP.JS
    const {details, update, submit} = props;

    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    };

    return(
        <form className="form container" onSubmit={onSubmit}>
            <div className="team-member inputs">
                <label>
                    Member Name:
                    {
                        <input 
                            type="text"
                            name="Member Name"
                            onChange={onChange}
                            value={details.memberName}
                        />
                    }
                </label>
                <label>
                    Email:
                    {
                        <input 
                            type="email"
                            name="email"
                            onChange={onChange}
                            value={details.email}
                        />
                    }
                </label>
                <label>
                    Role:
                    {
                        <select name="role" value={details.role} onChange={onChange}>
                            <option value="">---Select Your Role---</option>
                            <option value="">Backend Engineer</option>
                            <option value="">Frontend Engineer</option>
                            <option value="">Designer</option>
                            <option value="">Scrum Master</option>
                        </select>
                    }
                </label>
            </div>
        </form>
    )
}