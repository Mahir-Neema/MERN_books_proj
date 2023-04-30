const Book = require('../models/book');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().select('title author');
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.addBook = async (req, res) => {
  const { title, author } = req.body;
  try {
    const book = new Book({ title, author });
    await book.save();
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};


exports.searchBooks = async (req, res) => {
  const query = req.query.q;
  const regex = new RegExp(query, 'i');
  try {
    const books = await Book.find({
      $or: [
        { title: { $regex: regex } },
        { author: { $regex: regex } }
      ]
    });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
