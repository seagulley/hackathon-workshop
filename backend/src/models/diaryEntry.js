const mongoose = require('mongoose')

const diaryEntrySchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    mood: {
      type: Number,
    },
    entry: {
      type: String,
    }
  }
)

module.exports = mongoose.model('DiaryEntry', diaryEntrySchema)
