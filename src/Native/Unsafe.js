//import Result //

var _alvivi$elm_unsafe_task$Native_Unsafe = function () {


function run(task) {
	var result;
	task.callback(function (innerResult) {
		result = innerResult;
	});
	while (result === undefined);
	if (result.ctor === '_Task_succeed')
	{
		return _elm_lang$core$Result$Ok(result);
	}
	if (result.ctor === '_Task_fail')
	{
		return _elm_lang$core$Result$Err(result);
	}
	throw new Error('unexpected task result');
}

return {
	run: run
};

}();