import mongoose, { Schema, Document } from 'mongoose'

interface ISubtask extends Document {
  title: string
  isCompleted: boolean
}

const subtaskSchema: Schema = new Schema({
  title: { type: String, default: '' },
  isCompleted: { type: Boolean, default: false },
})

interface ITask extends Document {
  title: string
  description: string
  status: string
  subtasks: ISubtask[]
}

const taskSchema: Schema = new Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  status: { type: String, default: '' },
  subtasks: [subtaskSchema],
})

interface IColumn extends Document {
  name: string
  tasks: ITask[]
}

const columnSchema: Schema = new Schema({
  name: String,
  tasks: [taskSchema],
})

interface IBoard extends Document {
  name: string
  columns: IColumn[]
}

const boardSchema: Schema = new Schema({
  name: String,
  columns: [columnSchema],
})

interface IMain extends Document {
  boards: IBoard[]
}

const mainSchema: Schema = new Schema({
  boards: [boardSchema],
})

const BoardModel = mongoose.model<IMain>('boards', mainSchema)

export default BoardModel
