<template>
  <div class="contact">
   <div class="mdl-grid portfolio-max-width portfolio-contact">
                <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Contact</h2>
                    </div>
                    <div class="mdl-card__media">
                        <img class="article-image" src=" static/img/contact-image.jpg" border="0" alt="">
                    </div>
                    <div class="mdl-card__supporting-text">
                        <p>
                         This is work in progress.. try footer links..</p>

                         <p>
                         More features to be added soon..</p>
                        
                        <form action="#" class="">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" pattern="[A-Z,a-z, ]*" type="text" id="Name">
                                <label class="mdl-textfield__label" for="Name">Name...</label>
                                <span class="mdl-textfield__error">Letters and spaces only</span>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input class="mdl-textfield__input" type="text" id="Email">
                                <label class="mdl-textfield__label" for="Email">Email...</label>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <textarea class="mdl-textfield__input" type="text" rows="5" id="note"></textarea>
                                <label class="mdl-textfield__label" for="note">Enter note</label>
                            </div>
                            <p>
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit" disabled>
                                    Submit
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
    
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
    }
  }
}
</script>
<style>

</style>
