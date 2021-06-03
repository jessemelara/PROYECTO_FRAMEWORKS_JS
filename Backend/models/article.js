import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let ArticleSchema = Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now},
    image: String
});

export default mongoose.model('Article', ArticleSchema);
// articles --> guarda documentos de este tipo y con estructura dentro de la coleccion