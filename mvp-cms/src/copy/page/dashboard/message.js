$(function() {

  // Cache elements
  var $msgCards = $('.js-message-trigger');

  function initResizeInteraction( el, ctx ) {
    if ( !el.length && ctx.length ) return;

    function resizemovehandler( e ) {
      var target = e.target,
          x = (parseFloat(target.getAttribute('data-x')) || 0),
          y = (parseFloat(target.getAttribute('data-y')) || 0);

      target.style.width  = e.rect.width + 'px';
      target.style.height = e.rect.height + 'px';

      target.style.webkitTransform =
      target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }

    // initiate interactjs
    interact(el)
      .resizable({
        edges: { left: false, right: false, bottom: false, top: true },
        restrictEdges: {
          endOnly: false
        },
        restrictSize: {
          min: { height: 64 },
          max: { height: 480 }
        },
        inertia: true
      })
      .on('resizemove', resizemovehandler);
  }

  function initMessageCards( el ) {
    if ( !el.length ) return;

    function generateMessageArticle( templateIn, data ) {
      var templateFn = _.template(templateIn.html());
      var templateOut = templateFn(data);
      return templateOut;
    }

    var $root = $('#js_dashboard_main')
    ,   $msgArticleWrapper = $('<div>')
        .attr({
          'id': 'js_message_article_wrapper',
          'class': 'message-article-wrapper',
          'data-message-opened': '0'
        });

    $root.append( $msgArticleWrapper );
    $msgArticleWrapper = $root.find('#js_message_article_wrapper');

    // Loop the message cards
    el.each( function(i) {
      var $self = $(this);
      
      // Initiate click event
      $self.on('click', function(e) {
        e.preventDefault();

        // Check if message not already open
        if ( !$self[0].hasAttribute( 'data-message-open' ) ) {

          // Populate data
          var _data = {
            id: $self.attr('data-message-id') || '0',
            sender: $self.find('.js-message-sender').text() || '...',
            timeago: $self.find('.js-message-timeago').text() || '...',
            title: $self.find('.js-message-title').text() || '...'
          };

          // Append message article into DOM, along it's data
          $msgArticleWrapper
            .append( generateMessageArticle( $('#js_dashboard_message_article_template'), _data ) );

          // Feather Icons
          feather.icons['star'].toSvg();
          feather.icons['trash'].toSvg();
          feather.icons['x'].toSvg();

          // Add the message opened counter
          var msgOpenCounter = parseInt( $msgArticleWrapper.attr('data-message-opened') );
          msgOpenCounter++;
          $msgArticleWrapper.attr('data-message-opened', msgOpenCounter);
          
          // Cache the newly appended message article
          var $msgArticle = $msgArticleWrapper.find( '#js_message_article_' + _data.id );

          // Cache message order
          var msgOrder = $msgArticleWrapper.attr('data-message-opened');

          // Set attr with message order
          $msgArticle.attr('data-message-order', msgOrder );
          
          // Set attr with message trigger
          $msgArticle.attr('data-message-id', $self.attr('data-message-id') );

          // Set message article initial layout & z-index
          $msgArticle.css({
            'right': 96 * ( parseInt( msgOrder ) - 1 ),
            'z-index': msgOrder
          });

          // Init resize
          initResizeInteraction( $msgArticle[0], $msgArticleWrapper[0] );

          // Updating the message article contents

          // Feather icons. This looks unnecessarily ugly -___-
          $msgArticle.find('[data-feather]').each(function() {
            var $self = $(this);
            if ( $self.attr('data-feather').length )
              $self.parent().prepend(
                feather.icons[$self.attr('data-feather')]
                .toSvg({
                  width: '16',
                  height: '16'
                })
              );
          });

          $msgArticle.find('.marticle-body-scroll')
            .on('mouseover', function(e) { if( !$('body').hasClass('no-scroll') ) $('body').addClass('no-scroll'); })
            .on('mouseout', function(e) { if( $('body').hasClass('no-scroll') ) $('body').removeClass('no-scroll'); })

          // Update message meta
          $msgArticle.find('.js-marticle-sender').text( _data.sender );
          $msgArticle.find('.js-marticle-timeago').text( _data.timeago );
          $msgArticle.find('.js-marticle-label').append( $self.find('.js-message-label').html() );

          // Initiate close button
          $msgArticle.find( '.js-marticle-action-close' )
            .one( 'click', function(e) {
              e.preventDefault();
              closeMessageCard( $(this) );
            });

          // Toggle message open flag
          $self.attr('data-message-open', '');
        }
      });
    });

    // Swapping Z
    $(document).on('click', '.js-message-article', function(e) {
      e.preventDefault();
      if ( !$('.js-message-article').length || $('.js-message-article').length < 1 ) return false;
      var $self = $(this);

      var zIndexes = _.map( $('.js-message-article'), function(el) { return parseInt( $(el).css('z-index') ) })
      ,   maxZ = _.max( zIndexes )
      ,   currentZ = parseInt( $self.css('z-index') );

      if ( currentZ < maxZ ) $self.css('z-index', maxZ + 1);
    });
  }

  function closeMessageCard( el ) {
    if ( !el.length ) return;

    // Cache the message article element
    var $msgArticle = el.closest('.js-message-article');

    // Cache the message trigger element
    var $msgTrigger = $('.js-message-trigger[data-message-id=' + $msgArticle.attr('data-message-id') +  ']');

    // Cache the messages wrapper element
    var $msgArticleWrapper = el.closest('#js_message_article_wrapper');

    // Update the opened message length attr
    var msgArticlesNum = ($msgArticleWrapper.find('.js-message-article').length - 1) || 0;
    $msgArticleWrapper.attr('data-message-opened', msgArticlesNum);

    // Toggle message open flag
    $msgTrigger.removeAttr('data-message-open');

    // Remove the message article
    $msgArticle.remove();
  }

  initMessageCards( $msgCards );
});