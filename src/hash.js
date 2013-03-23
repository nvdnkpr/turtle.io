/**
 * Creates a hash of arg
 * 
 * @param  {Mixed}  arg     String or Buffer
 * @param  {String} encrypt [Optional] Type of encryption
 * @param  {String} digest  [Optional] Type of digest
 * @return {String}         Hash of arg
 */
factory.prototype.hash = function ( arg, encrypt, digest ) {
	if ( REGEX_NU.test( arg ) ) {
		arg = "";
	}

	if ( encrypt === undefined ) {
		encrypt = "md5";
	}

	if ( digest === undefined ) {
		digest  = "hex";
	}

	return crypto.createHash( encrypt ).update( arg ).digest( digest );
};
