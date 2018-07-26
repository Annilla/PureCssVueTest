<template>
  <div class="purecss">
    <h1>PureCss</h1>
    <div class="content">
      <h2>Grid</h2>
      <div class="pure-g">
        <div class="pure-u-1-3"><p>Thirds</p></div>
        <div class="pure-u-1-3"><p>Thirds</p></div>
        <div class="pure-u-1-3"><p>Thirds</p></div>
      </div>

      <h2>Forms</h2>
      <form class="pure-form pure-form-stacked">
          <fieldset>
            <legend>A Stacked Form</legend>
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="Email">
            <span class="pure-form-message">This is a required field.</span>
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Password">
            <label for="state">State</label>
            <select id="state">
                <option>AL</option>
                <option>CA</option>
                <option>IL</option>
            </select>
            <label for="remember" class="pure-checkbox">
                <input id="remember" type="checkbox"> Remember me
            </label>
            <button type="submit" class="pure-button pure-button-primary">Sign in</button>
          </fieldset>
      </form>

      <form class="pure-form">
        <input type="text" placeholder="Disabled input here..." disabled>
      </form>

      <form class="pure-form">
        <input type="text" value="Readonly input here..." readonly>
      </form>

      <form class="pure-form">
        <input type="text" class="pure-input-rounded">
        <button type="submit" class="pure-button">Search</button>
      </form>

      <form class="pure-form">
        <label for="option-one" class="pure-checkbox">
          <input id="option-one" type="checkbox" value="">
            Here's option one.
        </label>

        <label for="option-two" class="pure-radio">
          <input id="option-two" type="radio" name="optionsRadios" value="option1" checked>
            Here's a radio button. You can choose this one..
        </label>

        <label for="option-three" class="pure-radio">
          <input id="option-three" type="radio" name="optionsRadios" value="option2">
            ..Or this one!
        </label>
      </form>

      <h2>Buttons</h2>
      <a class="pure-button" href="#">A Pure Button</a>
      <button class="pure-button">A Pure Button</button>
      <button class="pure-button pure-button-disabled">A Disabled Button</button>
      <button class="pure-button" disabled>A Disabled Button</button>
      <a class="pure-button pure-button-primary" href="#">A Primary Button</a>
      <button class="pure-button pure-button-primary">A Primary Button</button>
      <div class="pure-button-group" role="group" aria-label="...">
        <button class="pure-button">A Pure Button</button>
        <button class="pure-button">A Pure Button</button>
        <button class="pure-button pure-button-active">A Pure Button</button>
      </div>

      <h2>Menus</h2>
      <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
          <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Home</a></li>
          <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a href="#" id="menuLink1" class="pure-menu-link">Contact</a>
            <ul class="pure-menu-children">
              <li class="pure-menu-item"><a href="#" class="pure-menu-link">Email</a></li>
              <li class="pure-menu-item"><a href="#" class="pure-menu-link">Twitter</a></li>
              <li class="pure-menu-item"><a href="#" class="pure-menu-link">Tumblr Blog</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
          <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Selected</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Normal</a></li>
          <li class="pure-menu-item pure-menu-disabled">Disabled</li>
        </ul>
      </div>

      <h2>Tables</h2>
      <table class="pure-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Honda</td>
            <td>Accord</td>
            <td>2009</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Toyota</td>
            <td>Camry</td>
            <td>2012</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Hyundai</td>
            <td>Elantra</td>
            <td>2010</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<style lang="scss">
.purecss {
  .content {
    max-width: 768px;
    margin: 0 auto;
    text-align: left;
  }
}
</style>
