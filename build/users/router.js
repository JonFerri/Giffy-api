import express from 'express';
const router = express.Router();
router.get("/tri", (req, res) => {
    res.send("primordial");
});
export default router;
