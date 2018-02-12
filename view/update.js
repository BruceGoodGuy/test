<span class="d-block p-2 bg-primary text-white result">{{notify}}</span>
<form class="mt-2" name="myForm">
  <div class="form-group">
    <label for="firstname">First name: </label>
    <input ng-model="first" name="firstName" type="text" class="form-control" id="firstname" placeholder="" value="{{first}}" required>
    <span ng-show="myForm.firstName.$error.required">First name is required.</span>
    <small id="emailHelp" class="form-text text-muted">Type your firstname. i.g: Bruce</small>
  </div>
  <div class="form-group">
    <label for="firstname">Last name: </label>
    <input ng-model="last" type="text" name="lastName"class="form-control" id="lastname" placeholder="" value="{{last}}" required> 
    <span ng-show="myForm.lastName.$error.required">Last name is required.</span>
    <small id="emailHelp" class="form-text text-muted">Type your last name. i.g: Nguyen</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email:</label>
    <input ng-model="email" required name="memail" type="email" class="form-control" id="Email" aria-describedby="emailHelp" value="{{email}}">
    <span ng-show="myForm.memail.$error.required">Your email is required.</span>
    <span ng-show="myForm.memail.$error.email">Your email is invalid.</span>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" class="btn btn-primary" ng-click="update()">Update</button>
</form>