const express = require("express");
const router = express.Router();
const members = require("../../members");
const uuid = require("uuid");

//Gets all members
router.get("/", (req, res) => res.json(members));

//get single member
router.get("/:idNum", (req, res) => {
	if (members.some((member) => member.id === parseInt(req.params.idNum))) {
		res.json(
			members.filter((member) => member.id === parseInt(req.params.idNum))
		);
	} else {
		res.status(400).json({
			msg: `no member with the id of ${req.params.idNum}`,
		});
	}
});

//create Member
router.post("/", (req, res) => {
	const newMember = {
		id: uuid.v4(),
		name: req.body.name,
		email: req.body.email,
		status: "active",
	};

	if (!newMember.name || !newMember.email) {
		return res.status(400).json({ msg: "please include a name and email" });
	}

	members.push(newMember);
	res.json(members);
});

//Update member
router.put("/:idNum", (req, res) => {
	if (members.some((member) => member.id === parseInt(req.params.idNum))) {
		members.forEach((member) => {
			if (member.id === parseInt(req.params.idNum)) {
				member.name = req.body.name ? req.body.name : member.name;
				member.email = req.body.email ? req.body.email : member.email;

				res.json({ msg: "Member updated", member });
			}
		});
	} else {
		res.status(400).json({
			msg: `no member with the id of ${req.params.idNum}`,
		});
	}
});

//delete member
router.delete("/:idNum", (req, res) => {
	if (members.some((member) => member.id === parseInt(req.params.idNum))) {
		res.json({
			msg: "Member deleted",
			members: members.filter(
				(member) => member.id !== parseInt(req.params.idNum)
			),
		});
	} else {
		res.status(400).json({
			msg: `no member with the id of ${req.params.idNum}`,
		});
	}
});

module.exports = router;
