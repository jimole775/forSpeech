export default class BunchThread {
  constructor (limit = 5, endCallback = () => console.log('auto end')) {
    this.limit = limit
    this.taskQueue = []
    this.taskLiving = 0
    this.endCallback = endCallback
    return this
  }

  taskCalling (task) {
    if (this.taskLiving >= this.limit) {
      this.taskQueue.push(task)
    } else {
      this.thread(task)
    }
    this.taskLiving ++
    return this
  }

  thread (task) {
    var that = this
    var promise = task && task()
    promise.then(function () {
      that.taskLiving --
      if (that.taskQueue.length) {
        return that.thread(that.taskQueue.shift())
      } else {
        if (that.taskLiving <= 0) {
          that.taskLiving = 0
          that.endCallback && that.endCallback()
        }
      }
    })
  }

  finally (callback) {
    this.endCallback = callback
  }
}