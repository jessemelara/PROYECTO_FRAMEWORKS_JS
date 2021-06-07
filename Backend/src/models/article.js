import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ArticleSchema = Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now},
    image: String
});

export default mongoose.model('Article', ArticleSchema);
// articles --> guarda documentos de este tipo y con estructura dentro de la coleccion