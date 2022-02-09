
const express = require('express');
const router =express.Router()
const { user,registration,login ,alluser,tempdelete} = require('../controller/user')
    //const {logger , isauthenticated } = require('../middleare')

router.get('/use',user);
router.get('/all',alluser);


router.post("/registration",registration)
router.post("/login",login);
router.put('/temp-delete/:id',tempdelete);
// router.put('/restore',restore);

module.exports = router;











// const express = require('express');
// const router = express.Router();

// const {user, registration,login} = require('../controller/user');

// router.get('/use',user);
// router.post("/registration",registration);
// router.post("/login",login);

// module.exports = router;