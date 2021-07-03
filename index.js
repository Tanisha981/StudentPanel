$( 'header ul a' ).on( 'click', function () {
	$( 'header ul' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});