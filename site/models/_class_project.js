// exports.Project = function
class Project {

  // _id : null,
  // title : 'String_title',
  // detail : 'String_detail',
  // priority : 'String_priority',
  // gitUrl : 'String_gitUrl',
  // isComplete : 'String_isComplete'

  // this._id;
  // this.title = 'String_title';
  // this.detail = 'String_detail';
  // this.priority = 'String_priority';
  // this.gitUrl = 'String_gitUrl';
  // this.isComplete = 'String_isComplete';

  // #_id;
  // #title = 'String_title';
  // #detail = 'String_detail';
  // #priority = 'String_priority';
  // #gitUrl = 'String_gitUrl';
  // #isComplete = 'String_isComplete';

  // #_id;
  // #title;
  // #detail;
  // #priority;
  // #gitUrl;
  // #isComplete;

  constructor(_id = '', title, detail, priority, gitUrl, isComplete) {
    this.p_id = _id;
    this.p_title = title;
    this.p_detail = detail;
    this.p_priority = priority;
    this.p_gitUrl = gitUrl;
    this.p_isComplete = isComplete;
  }

  get _id() {
    return this.p_id;
  }

  set setId(_id) {
    this.p_id = _id;
  }

  get title() {
    return this.p_title;
  }

  set setTitle(title) {
    this.p_title = title;
  }

  get detail() {
    return detail;
  }

  set setDetail(detail) {
    this.p_detail = detail;
  }

  get priority() {
    return priority;
  }

  set setPriority(priority) {
    this.p_priority = priority;
  }

  get gitUrl() {
    return gitUrl;
  }

  set setGitUrl(gitUrl) {
    this.p_gitUrl = gitUrl;
  }

  get isComplete() {
    return isComplete;
  }

  set setIsComplete(isComplete) {
    this.p_isComplete = isComplete;
  }

};

module.exports = Project;
