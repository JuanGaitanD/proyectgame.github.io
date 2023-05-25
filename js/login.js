jQuery(document).ready(function($){
    var $form_modal = $('.user-modal'),
      $form_login = $form_modal.find('#login'),
      $form_signup = $form_modal.find('#signup'),
      $form_forgot_password = $form_modal.find('#reset-password'),
      $form_modal_tab = $('.switcher'),
      $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
      $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
      $forgot_password_link = $form_login.find('.form-bottom-message a'),
      $back_to_login_link = $form_forgot_password.find('.form-bottom-message a'),
      $main_nav = $('.main-nav');
  
    //open modal
    $main_nav.on('click', function(event){
  
      if( $(event.target).is($main_nav) ) {
        // on mobile open the submenu
        $(this).children('ul').toggleClass('is-visible');
      } else {
        // on mobile close submenu
        $main_nav.children('ul').removeClass('is-visible');
        //show modal layer
        $form_modal.addClass('is-visible'); 
        //show the selected form
        ( $(event.target).is('.signup') ) ? signup_selected() : login_selected();
      }
  
    });
  
    //close modal
    $('.user-modal').on('click', function(event){
      if( $(event.target).is($form_modal) || $(event.target).is('.close-form') ) {
        $form_modal.removeClass('is-visible');
      } 
    });
    //close modal when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
          $form_modal.removeClass('is-visible');
        }
      });
  
    //switch from a tab to another
    $form_modal_tab.on('click', function(event) {
      event.preventDefault();
      ( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
    });
  
    //hide or show password
    $('.hide-password').on('click', function(){
      var $this= $(this),
        $password_field = $this.prev('input');
      
      ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
      ( 'Show' == $this.text() ) ? $this.text('Hide') : $this.text('Show');
      //focus and move cursor to the end of input field
      $password_field.putCursorAtEnd();
    });
  
    //show forgot-password form 
    $forgot_password_link.on('click', function(event){
      event.preventDefault();
      forgot_password_selected();
    });
  
    //back to login from the forgot-password form
    $back_to_login_link.on('click', function(event){
      event.preventDefault();
      login_selected();
    });
  
    function login_selected(){
      $form_login.addClass('is-selected');
      $form_signup.removeClass('is-selected');
      $form_forgot_password.removeClass('is-selected');
      $tab_login.addClass('selected');
      $tab_signup.removeClass('selected');
    }
  
    function signup_selected(){
      $form_login.removeClass('is-selected');
      $form_signup.addClass('is-selected');
      $form_forgot_password.removeClass('is-selected');
      $tab_login.removeClass('selected');
      $tab_signup.addClass('selected');
    }
  
    function forgot_password_selected(){
      $form_login.removeClass('is-selected');
      $form_signup.removeClass('is-selected');
      $form_forgot_password.addClass('is-selected');
    }
  
  
    //IE9 placeholder fallback
    //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
    if(!Modernizr.input.placeholder){
      $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
          }
      }).blur(function() {
        var input = $(this);
          if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.val(input.attr('placeholder'));
          }
      }).blur();
      $('[placeholder]').parents('form').submit(function() {
          $(this).find('[placeholder]').each(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
          }
          })
      });
    }
  
  });
  
  
  //credits https://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
  jQuery.fn.putCursorAtEnd = function() {
    return this.each(function() {
        // If this function exists...
        if (this.setSelectionRange) {
            // ... then use it (Doesn't work in IE)
            // Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
            var len = $(this).val().length * 2;
            this.setSelectionRange(len, len);
        } else {
          // ... otherwise replace the contents with itself
          // (Doesn't work in Google Chrome)
            $(this).val($(this).val());
        }
    });
  };





//Buenos días

function mostrar(n) {
  switch (true) {
    case n==0: 
      document.getElementById('juegos_compra').style.display = "contents";
      document.getElementById('seleccion_game').style.display = "none";
      document.getElementById('login').style.display = "none";
    break;

    case n==1: 
      document.getElementById('juegos_compra').style.display = "none";
      document.getElementById('seleccion_game').style.display = "contents";
      document.getElementById('login').style.display = "none";
      document.getElementById('comprado').style.display = "none";
    break;

    case n==2: 
      document.getElementById('juegos_compra').style.display = "none";
      document.getElementById('seleccion_game').style.display = "none";
      document.getElementById('login').style.display = "contents";
    break;
  } 
  
}

var users = [{user_name: "admin", email: "admin@gmail.com", password: "admin"}];
var games = [{nombre: "The Legend of Zelda: Breath of the Wild", fechaL: "3 de marzo de 2017", precio: "$59.99", resumen: "Explora el vasto mundo de Hyrule y despierta el poder del héroe", Categoria: "Aventura", Clasificación: "Para todos los públicos", idiomas: "Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma: "Nintendo Switch"}, 
{nombre: "Grand Theft Auto V",fechaL:"17 de septiembre de 2013", precio:"$29.99", resumen:"Únete a la vida del crimen en la gigantesca ciudad de Los Santos", Categoria:"Acción", Clasificación: "Mayores de 18 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PC, Xbox, PlayStation"}, 
{nombre: "Minecraft",fechaL:"18 de noviembre de 2011", precio:"¡Gratis!", resumen:"Construye y explora un mundo infinito lleno de posibilidades", Categoria:"Sandbox", Clasificación: "Para todos los públicos", idiomas:"Varios", Plataforma:"PC, Xbox, PlayStation, Nintendo Switch"}, 
{nombre: "The Witcher 3: Wild Hunt", fechaL:"19 de mayo de 2015", precio:"$29.99", resumen:"Embárcate en una emocionante aventura de fantasía y monstruos", Categoria:"RPG", Clasificación: "Mayores de 18 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PC, Xbox, PlayStation, Nintendo Switch"}, 
{nombre: "Red Dead Redemption 2",fechaL:"26 de octubre de 2018", precio:"$59.99", resumen:"Vive como un forajido en el salvaje oeste en esta épica historia", Categoria:"Acción", Clasificación: "Mayores de 18 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PC, Xbox, PlayStation"}, 
{nombre: "Fortnite",fechaL:"25 de julio de 2017", precio:"¡Gratis!", resumen:"Un battle royale donde construir combatir y ser el último en pie", Categoria:"Battle Royale", Clasificación: "Para todos los públicos", idiomas:"Varios", Plataforma:"PC, Xbox, PlayStation, Nintendo Switch"}, 
{nombre: "Overwatch",fechaL:"24 de mayo de 2016", precio:"$19.99", resumen:"Únete a un equipo de héroes y lucha en intensos enfrentamientos", Categoria:"Shooter", Clasificación: "Mayores de 13 años", idiomas:"Varios", Plataforma:"PC, Xbox, PlayStation"}, 
{nombre: "Super Mario Odyssey",fechaL:"27 de octubre de 2017", precio:"$59.99", resumen:"Ayuda a Mario a rescatar a la princesa Peach en una aventura épica", Categoria:"Plataformas", Clasificación: "Para todos los públicos", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"Nintendo Switch"}, 
{nombre: "God of War (2018)",fechaL:"20 de abril de 2018", precio:"$19.99", resumen:"Únete a Kratos en su venganza contra los dioses del Olimpo", Categoria:"Acción", Clasificación: "Mayores de 18 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PlayStation"},
{nombre: "Call of Duty: Warzone",fechaL:"10 de marzo de 2020", precio:"¡Gratis!", resumen:"Enfréntate en una intensa batalla real en un mundo abierto", Categoria:"Shooter", Clasificación: "Mayores de 18 años", idiomas:"Varios", Plataforma:"PC, Xbox, PlayStation"},
{nombre: "Cyberpunk 2077",fechaL:"10 de diciembre de 2020", precio:"$59.99", resumen:"Sumérgete en un futuro distópico lleno de tecnología y corrupción", Categoria:"RPG", Clasificación: "Mayores de 18 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PC, Xbox, PlayStation"}, 
{nombre: "Animal Crossing: New Horizons",fechaL:"20 de marzo de 2020", precio:"$59.99", resumen:"Crea tu propia isla paradisíaca y vive una vida relajada", Categoria:"Simulación", Clasificación: "Para todos los públicos", idiomas:"Varios", Plataforma:"Nintendo Switch"},
{nombre: "Destiny 2",fechaL:"6 de septiembre de 2017", precio:"¡Gratis!", resumen:"Conviértete en un guardián y protege la última ciudad de la humanidad", Categoria:"Shooter", Clasificación: "Mayores de 13 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PC, Xbox, PlayStation"},
{nombre: "Final Fantasy VII Remake",fechaL:"10 de abril de 2020", precio:"$59.99", resumen:"Revive la clásica historia de Cloud y sus aliados en Midgar", Categoria:"RPG", Clasificación: "Mayores de 13 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PlayStation"},
{nombre: "Resident Evil Village",fechaL:"7 de mayo de 2021",precio:"$59.99", resumen:"Enfréntate a horrores sobrenaturales en un pueblo maldito", Categoria:"Survival Horror", Clasificación: "Mayores de 18 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PC, Xbox, PlayStation"},
{nombre: "Sekiro: Shadows Die Twice",fechaL:"22 de marzo de 2019", precio:"$39.99", resumen:"Ponte en la piel de un ninja y desafía a tus enemigos", Categoria:"Acción", Clasificación: "Mayores de 17 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PC, Xbox, PlayStation"},
{nombre: "Halo: Infinite",fechaL:"8 de diciembre de 2021", precio:"$59.99", resumen:"Vuelve al universo de Halo en una nueva y épica aventura", Categoria:"Shooter", Clasificación: "Mayores de 17 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PC, Xbox"},
{nombre: "Ghost of Tsushima",fechaL:"17 de julio de 2020", precio:"$59.99", resumen:"Explora el Japón feudal y conviértete en un legendario samurái", Categoria:"Acción", Clasificación: "Mayores de 17 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PlayStation"},
{nombre: "Mass Effect: Legendary Edition",fechaL:"14 de mayo de 2021", precio:"$59.99", resumen:"Revive la trilogía de Mass Effect con mejoras y gráficos mejorados", Categoria:"RPG", Clasificación: "Mayores de 17 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés",Plataforma:"PC, Xbox, PlayStation"},
{nombre: "Among Us",fechaL:"15 de junio de 2018", precio:"¡Gratis!", resumen:"Descubre al impostor en una nave espacial en este juego social", Categoria:"Social Deduction", Clasificación: "Para todos los públicosidiomas:Varios", Plataforma:"PC, Xbox, PlayStation, Nintendo Switch"},
{nombre: "Fall Guys: Ultimate Knockout",fechaL:"4 de agosto de 2020", precio:"$19.99", resumen:"Participa en carreras caóticas y minijuegos en este divertido juego", Categoria:"Party", Clasificación: "Mayores de 13 años", idiomas: "Varios", Plataforma:"PC, PlayStation"}, 
{nombre: "Doom Eternal",fechaL:"20 de marzo de 2020", precio:"$59.99", resumen:"Elimina hordas de demonios en este frenético shooter en primera persona", Categoria:"Shooter", Clasificación: "Mayores de 17 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PC, Xbox, PlayStation"},
{nombre: "Persona 5 Royal",fechaL:"31 de marzo de 2020", precio:"$59.99,", resumen:"Vive la vida de un estudiante y desvela los secretos de Tokio", Categoria:"RPG", Clasificación: "Mayores de 17 años", idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PlayStation"},
{nombre: "Genshin Impact",fechaL:"28 de septiembre de 2020", precio:"¡Gratis!", resumen:"Explora un vasto mundo abierto y desata el poder de los elementos", Categoria:"Acción", Clasificación: "Mayores de 12 años", idiomas:"Varios", Plataforma:"PC, PlayStation, Nintendo Switch"},
{nombre: "Rocket League",fechaL:"7 de julio de 2015",precio:"¡Gratis!", resumen:"Participa en partidos de fútbol con autos en esta experiencia única", Categoria:"Deportes", Clasificación: "Para todos los públicos", idiomas:"Varios", Plataforma:"PC, Xbox, PlayStation, Nintendo Switch"},
{nombre: "Monster Hunter: World",fechaL:"26 de enero de 2018",precio:"$29.99", resumen:"Caza monstruos épicos y crea tu armadura en un mundo lleno de peligros", Categoria:"RPG", Clasificación: "Mayores de 16 años",idiomas:"Español, Inglés, Francés, Alemán, Italiano, Japonés", Plataforma:"PC, Xbox, PlayStation"}, 
{nombre: "Valorant",fechaL:"2 de junio de 2020", precio:"¡Gratis!", resumen:"Únete a un equipo de agentes y participa en emocionantes batallas tácticas", Categoria:"Shooter", Clasificación: "Mayores de 16 años", idiomas:"Varios", Plataforma:"PC"}
];

function  fill_games() {
  var lar = this.games.length;

  for (i=0;i<lar;i++){
    document.getElementById("select_games").innerHTML += `
      <option value="${i}">${this.games[i].nombre}</option>
    `;
  }
  
}

function login_true() {
  login = sessionStorage.getItem("login");
  if (login == 1) {
    document.getElementById('user_p').style.display = "none";
    document.getElementById('select_p').style.display = "block";
    document.getElementById('screen_p').style.display = "none";
    fill_games();
  }
  sessionStorage.clear();
}

function login_session() {
  var email = document.getElementById('signin-email').value;
  var password = document.getElementById('signin-password').value;

  var validacion = this.users.find(function(u) {return u.email === email && u.password === password;})

  if (validacion) {
    console.log(true);

    var modal = document.getElementById('user-modal');
    modal.classList.remove('is-visible');
    document.getElementById('user_p').style.display = "none";
    document.getElementById('select_p').style.display = "block";
    document.getElementById('screen_p').style.display = "none";
    fill_games();

    console.log(this.games);

    mostrar(1);
    sessionStorage.setItem("user", this.users[i]);
    sessionStorage.setItem("login", "1");
  } else {
    document.getElementById('signin-email').value = "";
    document.getElementById('signin-password').value = "";
    document.getElementById('e4').style.display = "block";

    console.log(false);
  }
}

function register() {
  var check = document.getElementById('accept-terms').checked;

  if (check==true) {

    document.getElementById('a_terminos').style.display = "none";

    var user_name = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    if (user_name != "" && email != "" && password != "") {
      var user = {
        user_name: user_name,
        email: email,
        password: password
      }
  
      i=1;
      this.users.push(user);
      sessionStorage.setItem("user", this.users[i].nombre);
      sessionStorage.setItem("login", "1");
      i++;
      
      //wow
      var sing_in = document.getElementById('sing_in');
      var Create_acount = document.getElementById('Create_acount');
      var login = document.querySelector('[data-id="e1"]');
      var signup = document.querySelector('[data-id="e2"]');
  
  
      sing_in.classList.add("selected");
      Create_acount.classList.remove("selected");
      login.classList.add("is-selected");
      signup.classList.remove("is-selected");

      document.getElementById('signup-username').value = "";
      document.getElementById('signin-email').value = "";
      document.getElementById('signup-email').value = "";
      document.getElementById('signup-password').value = "";
      document.getElementById('signin-password').value = "";
    } else {
      document.getElementById('datos_valid').style.display = "block";
    }
  } else {
    document.getElementById('a_terminos').style.display = "block";
  }
  
}

function select_game() {
  var game_selected = document.getElementById('select_games');
  var index = game_selected.value;
  console.log(index);

  document.getElementById('user_p').style.display = "none";
  document.getElementById('select_p').style.display = "none";
  document.getElementById('screen_p').style.display = "block";

  document.getElementById('seleccion_game').style.display = "none";
  document.getElementById('juegos_compra').style.display = "block";

  document.getElementById('table_game').innerHTML = `
  <table border="2px solid white" style="margin-inline: 20%;">
    <thead>
      <tr>
        <th style="width: 200px;">Nombre</th>
        <th>Descripción</th>
        <th>Cantidad</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style="text-align: left; padding: 5px;">${this.games[index].nombre}</td>
        <td style="text-align: left; padding: 5px;">${this.games[index].resumen}</td>
        <td>1</td>
      </tr>
    </tbody>
    </table>
  `;
}

function compra() {
  document.getElementById('juegos_compra').style.display = "none";
  document.getElementById('comprado').style.display = "block";
  document.getElementById('user_p').style.display = "none";
  document.getElementById('select_p').style.display = "block";
  document.getElementById('screen_p').style.display = "none";
}