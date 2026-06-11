import React, { useState } from "react";
import LifecycleDemo from "../LifecycleDemo";

function StudentForm() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [lastKey, setLastKey] = useState("");
	const [focusMsg, setFocusMsg] = useState("");
	const [clickCount, setClickCount] = useState(0);
	const [submitted, setSubmitted] = useState(null);
	const [showLifecycle, setShowLifecycle] = useState(true);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((s) => ({ ...s, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted({ ...form });
	};

	return (
		<div className="page student-form-page">
			<h1>Student Form</h1>
			<form className="form-card" onSubmit={handleSubmit}>
				<div className="form-field">
					<label>Name</label>
					<br />
					<input name="name"value={form.name}onChange={handleChange}
						onFocus={() => setFocusMsg("Name input focused")}
						onBlur={() => setFocusMsg("")}
						onKeyDown={(e) => setLastKey(`Down:${e.key}`)}
						onKeyUp={(e) => setLastKey((prev) => prev + ` Up:${e.key}`)}
						placeholder="Enter Your Full Name"
					/>
				</div>

<div className="form-field">
					<label>Email</label>
					<input name="email" value={form.email} onChange={handleChange}  placeholder="Enter email"/>
				</div>

				<div className="form-field">
					<label>Phone No.</label>
					<input name="phone Number" value={form.PhoneNumber} onChange={handleChange}  placeholder="Enter Phone No."/>
				</div>

			<div className="form-field">
					<label>College Name</label>
					<input name="College Name" value={form.CollegeName} onChange={handleChange}  placeholder="Enter College Name"/>
				</div>

				<div className="form-field">
					<label>Hobby</label>
					<input name="Hobby" value={form.Hobby} onChange={handleChange} placeholder="Enter Your Hobby" />
				</div>

				<div >
					<button
						type="submit"
						onClick={() => setClickCount((c) => c + 1)}
				
					>
						Click me (onClick)
					</button><br></br>

					<button
						type="button"
						onMouseOver={() => setFocusMsg("Mouse over reset button")}
						onClick={() => {
							setForm({ name: "", email: "", message: "" });
							setSubmitted(null);
						}}
			
					> Submit (onSubmit)
					</button>
				</div>
			</form>
			<hr />
			<div>
				<h3>Event Output :-</h3>
				<p>LifeCycle Demo</p>
				<p>Mount Demo    Update Demo     Received Count: {clickCount}</p>
			</div>
		</div>
	);
}

export default StudentForm;
