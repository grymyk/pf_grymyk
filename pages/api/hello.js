export default function hello(req, res) {
    res.status('200')
        .json({ message: 'It works' });
}