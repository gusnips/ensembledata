export interface paths {
  "/customer/get-used-units": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Units Used
     * @description <p style="font-size: 15px;">	This API allows ours clients to check the number of units used on a certain date.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">0</b> units</h3><h4>API usage examples</h4>
     *
     *     - Token does not exist:<br><b>-></b> Error code 491 returned.<br>Cost: <b style="color: #E07A57;">0 units</b>
     *
     *     - Token exists:<br><b>-></b> Units usage for date returned.<br>Cost: <b style="color: #E07A57;">0 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/customer/get-used-units?date=2022-11-19&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["customer_get_usage"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/customer/get-history": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Units History
     * @description <p style="font-size: 15px;">	This API allows our clients to check the number of units used in the last N days from today.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">0</b> units</h3><h4>API usage examples</h4>
     *
     *     - Token does not exist:<br><b>-></b> Error code 491 returned.<br>Cost: <b style="color: #E07A57;">0 units</b>
     *
     *     - Token exists:<br><b>-></b> Units usage history returned.<br>Cost: <b style="color: #E07A57;">0 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/customer/get-history?days=10&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["customer_get_usage_history"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/hashtag/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag Search
     * @description <p style="font-size: 15px;">	Fetch chunk of posts containing a given hashtag.
     *
     *     The posts are fetched directly from <a href="https://www.tiktok.com/tag/magic" target="_blank">https://www.tiktok.com/tag/magic</a>. A single call to this endpoint returns about 20 posts. Use the `cursor` parameter to fetch more posts. (cursor=0 will fetch posts 1-20, cursor=20 will fetch posts 21-40 and so on). The maximum cursor which can be used is around 4000-5000 depending on the hashtag. See the `cursor` query parameter below for more information.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><h4>API usage examples</h4>
     *
     *     - Hashtag exists:<br><b>-></b> 20 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Hashtag does not exist:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Cursor is too big:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/hashtag/posts?name=magic&cursor=0&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_hashtag_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/hashtag/recent-posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Full Hashtag Search
     * @description <p style="font-size: 15px;">	Fetch all the posts that Tiktok shows for a given hashtag.
     *
     *     All the posts are fetched directly from <a href="https://www.tiktok.com/tag/magic" target="_blank">https://www.tiktok.com/tag/magic</a> and filter out any that are were not posted within the last N days.
     *      This is a convenience endpoint which internally calls the 'Hashtag Search' endpoint repeatedly (iterating the cursor) to collect all the posts for a given hashtag in one api call. Additionally, any posts which were created more than N days ago are filtered out.
     *
     *     The `max_depth` is the total number of calls which need to be made to the 'Search Hashtag' endpoint to collect all the posts. The maximum value of `max_depth` is 250, given that 1 call retrieves 20 posts and a maximum of 5000 posts can be retrieved from TikTok. The cost is `max_depth` divided by 10 to provide a discount over manually making all the individual calls to the 'Search Hashtag' endpoint.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">max_depth / 10</b> units</h3><h4>API usage examples</h4>
     *
     *     - Hashtag does not exist:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Hashtag exists, days is set to 10000 and hashtag has 80 posts (max_depth here is 4 because 80 total posts / 20 posts per chunk):<br><b>-></b> 80 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Hashtag exists, days is set to 10000 and hashtag has 800 posts (max_depth here is 40 because 800 total posts / 20 posts per chunk):<br><b>-></b> 800 posts returned.<br>Cost: <b style="color: #E07A57;">4 units</b>
     *
     *     - Hashtag exists, days is set to 10 and hashtag has 800 posts (max_depth here is 40 because 800 total posts / 20 posts per chunk) and only 10 posts are from the past 10 days:<br><b>-></b> 10 posts returned.<br>Cost: <b style="color: #E07A57;">4 units</b>
     *
     *     - Hashtag exists, days is set to 10000 and hashtag has 3200 posts (max_depth here is 160 because 3200 total posts / 20 posts per chunk):<br><b>-></b> 3200 posts returned.<br>Cost: <b style="color: #E07A57;">16 units</b>
     *
     *     - Hashtag exists, days is set to 10 and hashtag has 3200 posts (max_depth here is 160 because 3200 total posts / 20 posts per chunk) and only 10 posts are from the past 10 days:<br><b>-></b> 10 posts returned.<br>Cost: <b style="color: #E07A57;">16 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/hashtag/recent-posts?name=nichie&days=90&remap_output=True&max_cursor=10000&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_full_hashtag_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/keyword/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Keyword Search
     * @description <p style="font-size: 15px;">	Fetch posts for a given keyword from the Tiktok mobile app search video bar according to filter based on time and sorting.
     *
     *     Returns a maximum of 20 posts per call (if match_exactly is true, it returns 10 posts per call). Note: the cost becomes (1 + #returned_posts) when get_author_stats is true. See the `cursor` query parameter below for information on how to fetch more posts.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><h4>API usage examples</h4>
     *
     *     - Keyword exists:<br><b>-></b> 20 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Keyword exists and does not have any more posts:<br><b>-></b> 14 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Keyword exists and match_exactly parameter is True:<br><b>-></b> 10 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Keyword exists and match_exactly parameter is True and get_author_stats is True:<br><b>-></b> 15 posts returned.<br>Cost: <b style="color: #E07A57;">16 units</b>
     *
     *     - Cursor is too big:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/keyword/search?name=tesla&cursor=0&period=1&sorting=0&country=us&match_exactly=False&get_author_stats=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_keyword_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/keyword/full-search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Full Keyword Search
     * @description <p style="font-size: 15px;">	Fetch all possible posts for a given keyword from the Tiktok mobile app search video bar according to filter based on time. This API automatically manages the pagination for our 'Keyword Search' endpoint.
     *
     *     This is a convenience endpoint which internally calls the 'Keyword Search' endpoint repeatedly (iterating the cursor) to collect all the posts for a given keyword in one api call.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_posts / 20</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/keyword/full-search?name=magic&period=1&sorting=0&country=us&match_exactly=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_full_keyword_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/user/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Posts From Username
     * @description <p style="font-size: 15px;">	Fetch user posts from their username. Depth 1 returns the 10 most recent posts, depth N returns the N * 10 most recent posts. The endpoint only returns posts that are not restricted by TikTok.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1 + depth</b> units</h3><h4>API usage examples</h4>
     *
     *     - Username does not exist:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Username exists, but user does not have any posts:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Username exists, depth is set to 1 and user has more than 10 posts:<br><b>-></b> 10 posts returned.<br>Cost: <b style="color: #E07A57;">2 units</b>
     *
     *     - Username exists, depth is set to 1 and user has 5 posts:<br><b>-></b> 5 posts returned.<br>Cost: <b style="color: #E07A57;">2 units</b>
     *
     *     - Username exists, depth is set to 10 and user has more than 100 posts:<br><b>-></b> 100 posts returned.<br>Cost: <b style="color: #E07A57;">11 units</b>
     *
     *     - Username exists, depth is set to 10 and user only has 45 posts:<br><b>-></b> 45 posts returned.<br>Cost: <b style="color: #E07A57;">6 units</b>
     *
     *     - Username exists, depth is set to 100, user only has 15 posts more recent than given oldest_createtime:<br><b>-></b> 15 posts returned.<br>Cost: <b style="color: #E07A57;">3 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/user/posts?username=daviddobrik&depth=1&start_cursor=0&oldest_createtime=1667843879&new_version=False&download_video=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_user_posts_from_username"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/user/posts-from-secuid": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Posts From Secuid
     * @description <p style="font-size: 15px;">	Fetch user posts from their secondary user ID. Depth 1 returns the 10 most recent posts, depth N returns the N * 10 most recent posts. The endpoint only returns posts that are not restricted by TikTok.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">depth</b> units</h3><h4>API usage examples</h4>
     *
     *     - secUid does not exist:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - secUid exists, but user does not have any posts:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - secUid exists, depth is set to 1 and user has more than 10 posts:<br><b>-></b> 10 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - secUid exists, depth is set to 1 and user has 5 posts:<br><b>-></b> 5 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - secUid exists, depth is set to 10 and user has more than 100 posts:<br><b>-></b> 100 posts returned.<br>Cost: <b style="color: #E07A57;">10 units</b>
     *
     *     - secUid exists, depth is set to 10 and user only has 45 posts:<br><b>-></b> 45 posts returned.<br>Cost: <b style="color: #E07A57;">5 units</b>
     *
     *     - secUid exists, depth is set to 100, user only has 15 posts more recent than given oldest_createtime:<br><b>-></b> 15 posts returned.<br>Cost: <b style="color: #E07A57;">2 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/user/posts-from-secuid?secUid=MS4wLjABAAAAQ45IcDZIqrknyl0FDjs7xDlcxlaRE7CcBx1ENxYkWK00UpeKTTlCQWKxq6t9QM6b&depth=1&start_cursor=0&oldest_createtime=1667843879&new_version=False&download_video=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_user_posts_from_secuid"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/user/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Info From Username
     * @description <p style="font-size: 15px;">	Fetch user information and statistics from their username. The data returned includes country, language, biography, profile picture, engagement statistics etc.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><h4>API usage examples</h4>
     *
     *     - Username does not exist:<br><b>-></b> null returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Username exists:<br><b>-></b> info returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/user/info?username=daviddobrik&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_user_info_from_username"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/user/info-from-secuid": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Info From Secuid
     * @description <p style="font-size: 15px;">	Fetch user information and statistics from their secondary user ID. The data returned includes country, language, biography, profile picture, engagement statistics etc.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><h4>API usage examples</h4>
     *
     *     - secUid does not exist:<br><b>-></b> null returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - secUid exists:<br><b>-></b> info returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/user/info-from-secuid?secUid=MS4wLjABAAAAQ45IcDZIqrknyl0FDjs7xDlcxlaRE7CcBx1ENxYkWK00UpeKTTlCQWKxq6t9QM6b&alternative_method=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_user_info_from_secuid"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/user/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Search
     * @description <p style="font-size: 15px;">	Fetch list of users whose username might be related to the given keyword.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/user/search?keyword=daviddobrik&cursor=0&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_user_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/post/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Info
     * @description <p style="font-size: 15px;">	Fetch post information and statistics from URL.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/post/info?url=https://www.tiktok.com/@daviddobrik/video/7165262254722534698&token=YOUR_TOKEN_HERE&new_version=False&download_video=False">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_post_info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/post/multi-info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Multiple Post Info
     * @description <p style="font-size: 15px;">	Fetch information for multiple post IDs.
     *
     *     The endpoint can handle a maximum of 100 posts at once. The endpoint only returns the post information for posts that exist and that are not restricted by TikTok.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2 * #returned_posts</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/post/multi-info?ids=7210531475052236078;7102806710334606597;710280671033460623434597&new_version=False&download_video=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_multi_post_info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/post/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Comments
     * @description <p style="font-size: 15px;">	Fetch comments for a given post. Each request returns a chunk of 30 comments.
     *
     *     See the `cursor` query parameter below for information on how to manage pagination (fetch more comments).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><h4>API usage examples</h4>
     *
     *     - Aweme ID does not exist:<br><b>-></b> null returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Aweme ID exists and has 20 comments:<br><b>-></b> 20 comments returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Aweme ID exists and has more than 30 comments:<br><b>-></b> 30 comments and cursor for next request returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/post/comments?aweme_id=7348608161672187167&cursor=0&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_post_comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/post/comments-replies": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Comment Replies
     * @description <p style="font-size: 15px;">	Fetch the replies to a comments for a given post.
     *
     *      Each request returns a chunk of 30 replies to a comment. See the `cursor` query parameter below for information on how to manage pagination (fetch more replies).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><h4>API usage examples</h4>
     *
     *     - Comment ID does not exist:<br><b>-></b> null returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Comment ID exists and has 20 replies:<br><b>-></b> 20 replies to the comment returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Comment ID exists and has more than 30 replies:<br><b>-></b> 30 replies to the comment and cursor for next request returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/post/comments-replies?aweme_id=7348608161672187167&comment_id=7348609743096988422&cursor=0&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_post_comment_replies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/music/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Music Search
     * @description <p style="font-size: 15px;">	Fetch information about music based on a string.
     *
     *     See the `cursor` query parameter below for information on how to manage pagination (fetch more results).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/music/info?name=fix%20you&cursor=0&sorting=0&filter_by=0&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_music_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/music/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Music Posts
     * @description <p style="font-size: 15px;">	Fetch the videos which have a particular piece of music in the background.
     *
     *     The `music_id` will need to be found from other APIs (any of the APIs that return posts, will also contain the music id for the music used in the video).
     *
     *     See the `cursor` query parameter below for information on how to manage pagination (fetch more results).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/music/posts?music_id=7063948643480488709&cursor=0&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_music_posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/music/details": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Music Details
     * @description <p style="font-size: 15px;">	Fetch detailed information for a music ID.
     *
     *     The music `id` will need to be found from other APIs (any of the APIs that return posts, will also contain the music id for the music used in the video).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/music/details?id=7063948643480488709&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_music_details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/user/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Followers
     * @description <p style="font-size: 15px;">	Fetch followers for a given user.
     *
     *     Each request returns a chunk of 100 followers. See the `cursor` query parameter below for information on how to manage pagination (fetch more followers). Tiktok returns in total the 10,000 most recent followers. Note: if the `secUid` doesn't exists, the cost is just 1 unit.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><h4>API usage examples</h4>
     *
     *     - secUid does not exist:<br><b>-></b> null returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - secUid exists and has 40 followers:<br><b>-></b> 40 followers returned.<br>Cost: <b style="color: #E07A57;">2 units</b>
     *
     *     - secUid exists and has more than 100 followers:<br><b>-></b> 100 followers and cursor for next request returned.<br>Cost: <b style="color: #E07A57;">2 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/user/followers?id=6784819479778378757&secUid=MS4wLjABAAAAQ45IcDZIqrknyl0FDjs7xDlcxlaRE7CcBx1ENxYkWK00UpeKTTlCQWKxq6t9QM6b&cursor=0&page_token=&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_user_followers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/user/followings": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Followings
     * @description <p style="font-size: 15px;">	Fetch followings for a given user.
     *
     *     Each request returns a chunk of 100 followings. See the `cursor` and `page_token` query parameters below for information on how to manage pagination (fetch more followings). Note: if the `secUid` doesn't exists, the cost is just 1 unit.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><h4>API usage examples</h4>
     *
     *     - secUid does not exist:<br><b>-></b> null returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - secUid exists and has 40 followings:<br><b>-></b> 40 followings returned.<br>Cost: <b style="color: #E07A57;">2 units</b>
     *
     *     - secUid exists and has more than 100 followings:<br><b>-></b> 100 followings and cursor for next request returned.<br>Cost: <b style="color: #E07A57;">2 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/user/followings?id=6784819479778378757&secUid=MS4wLjABAAAAQ45IcDZIqrknyl0FDjs7xDlcxlaRE7CcBx1ENxYkWK00UpeKTTlCQWKxq6t9QM6b&cursor=0&page_token=&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_user_followings"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/user/liked-posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Liked Posts
     * @description <p style="font-size: 15px;">	Fetch the list of liked posts of a user (only if publicly available).
     *
     *     See the `cursor` query parameter below for information on how to manage pagination (fetch more posts).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/user/liked-posts?secUid=MS4wLjABAAAAzdgqSwTVcRLGFPY7J-JnwnH3QQQ8sozmxYSmE5Fxeuql6jjokm5Lui0tl_WrDYWD&cursor=0&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_user_liked_posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tt/live/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Lives Search
     * @description <p style="font-size: 15px;">	Fetch lives posts for a given keyword from the Tiktok mobile app search lives section.
     *
     *     Returns a maximum of 20 lives per call. See the `cursor` query parameter below for information on how to fetch more posts.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/tt/live/search?keyword=magic&cursor=0&country=us&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["tiktok_lives_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Keyword Search
     * @description <p style="font-size: 15px;">	Fetch videos from a given keyword.
     *
     *     Depth 1 returns approx. 20 videos, Depth N returns approx. 20 * N videos.
     *
     *     The videos are fetched directly from https://www.youtube.com/results?search_query=magic. By default, this endpoint will search using the `All` category on Youtube. If you want to search in a specific category, use the `Featured Categories Search` endpoint.
     *
     *     See the `start_cursor` query parameter below for information on how to manage pagination (fetch more videos).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">depth</b> units</h3><h4>API usage examples</h4>
     *
     *     - Depth 1:<br><b>-></b> 20 videos returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - Depth 5:<br><b>-></b> 100 videos returned.<br>Cost: <b style="color: #E07A57;">5 units</b>
     *
     *     - Depth 100 but keyword only has 100 videos:<br><b>-></b> 100 videos returned.<br>Cost: <b style="color: #E07A57;">5 units</b>
     *
     *     - Depth 100:<br><b>-></b> 2000 videos returned.<br>Cost: <b style="color: #E07A57;">100 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/search?keyword=magic&depth=1&start_cursor=&period=overall&sorting=relevance&get_additional_info=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_keyword_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/search/featured-categories": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Featured Categories Search
     * @description <p style="font-size: 15px;">	Fetch the related categories showing on Youtube search keyword.
     *
     *     The cursor returned for each category can be used as `start_cursor` in the Youtube Search Keyword API for fetching videos of the chosen category.
     *
     *     The categories are fetched directly from https://www.youtube.com/results?search_query=magic.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/search/featured-categories?name=magic&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_featured_categories_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/hashtag/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag Search
     * @description <p style="font-size: 15px;">	Fetch videos from a given hashtag. Depth 1 returns approx. 35 videos, Depth N returns approx. 35 * N videos.
     *
     *     The videos are fetched directly from https://www.youtube.com/hashtag/magic.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_videos / 20</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/hashtag/search?name=magic&depth=1&only_shorts=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_hashtag_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/channel/detailed-info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Detailed Info
     * @description <p style="font-size: 15px;">	Get detailed information for a specific Youtube channel from its ID (youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/channel/detailed-info?browseId=UCnQghMm3Z164JFhScQYFTBw&from_url=False&get_additional_info=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_channel_detailed_info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/channel/videos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Videos
     * @description <p style="font-size: 15px;">	Fetch videos for a given channel from its ID (youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA).
     *
     *     Depth 1 returns approx. 25 videos, Depth N returns approx. 25 * N videos.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_videos / 10</b> units</h3><h4>API usage examples</h4>
     *
     *     - Depth 1:<br><b>-></b> 22 videos returned.<br>Cost: <b style="color: #E07A57;">3 units</b>
     *
     *     - Depth 5 but channel has only 20 videos:<br><b>-></b> 20 videos returned.<br>Cost: <b style="color: #E07A57;">2 units</b>
     *
     *     - Depth 50:<br><b>-></b> 100 videos returned.<br>Cost: <b style="color: #E07A57;">10 units</b>
     *
     *     - Depth 100:<br><b>-></b> 2000 videos returned.<br>Cost: <b style="color: #E07A57;">200 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/channel/videos?browseId=UCnQghMm3Z164JFhScQYFTBw&depth=1&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_channel_videos"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/channel/shorts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Shorts
     * @description <p style="font-size: 15px;">	Fetch Youtube Shorts for a given channel from its ID (youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA).
     *
     *     Depth 1 returns approx. 50 videos, Depth N returns approx. 50 * N videos.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_shorts / 10</b> units</h3><h4>API usage examples</h4>
     *
     *     - Depth 1:<br><b>-></b> 53 shorts returned.<br>Cost: <b style="color: #E07A57;">6 units</b>
     *
     *     - Depth 5 but channel only has 20 shorts:<br><b>-></b> 20 shorts returned.<br>Cost: <b style="color: #E07A57;">2 units</b>
     *
     *     - Depth 10:<br><b>-></b> 500 videos returned.<br>Cost: <b style="color: #E07A57;">50 units</b>
     *
     *     - Depth 50:<br><b>-></b> 2500 videos returned.<br>Cost: <b style="color: #E07A57;">250 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/channel/shorts?browseId=UClAa0YLrW4MaIKOWaeZR9Xg&depth=1&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_channel_shorts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/channel/streams": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Streams
     * @description <p style="font-size: 15px;">	Fetch Youtube Live Streams for a given channel from its ID (youtube.com/channel/UChBQgieUidXV1CmDxSdRm3g).
     *
     *     Depth 1 returns approx. 30 videos, Depth N returns approx. 30 * N videos.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_streams / 10</b> units</h3><h4>API usage examples</h4>
     *
     *     - Depth 1:<br><b>-></b> 30 streams returned.<br>Cost: <b style="color: #E07A57;">3 units</b>
     *
     *     - Depth 5 but channel only has 20 streams:<br><b>-></b> 20 streams returned.<br>Cost: <b style="color: #E07A57;">2 units</b>
     *
     *     - Depth 10:<br><b>-></b> 300 streams returned.<br>Cost: <b style="color: #E07A57;">30 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/channel/streams?browseId=UChBQgieUidXV1CmDxSdRm3g&depth=1&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_channel_streams"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/channel/get-short-stats": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Video / Short Details
     * @description <p style="font-size: 15px;">	Fetch statistics for a Youtube short or video from its channel ID (youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/channel/get-short-stats?id=9lhtFHpNfms&alternative_method=False&get_subscribers_count=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_video_details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/channel/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Subscriber Count
     * @description <p style="font-size: 15px;">	Fetch the number of subscribers for a channel from its ID (youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/channel/followers?browseId=UCnQghMm3Z164JFhScQYFTBw&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_channel_subscribers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/channel/name-to-id": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Username To Id
     * @description <p style="font-size: 15px;">	Get the channel ID (youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA) from the channel username (youtube.com/@MrBeast).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/channel/name-to-id?name=daviddobrik&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_channel_username_to_id"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/channel/id-to-name": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Id To Username
     * @description <p style="font-size: 15px;">	Get the channel username (youtube.com/@MrBeast) from the channel ID (youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/channel/id-to-name?browseId=UCX6OQ3DkcsbYNE6H8uQQuVA&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_channel_id_to_username"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/music/id-to-shorts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Music Id To Shorts
     * @description <p style="font-size: 15px;">	Get shorts using a specific music ID.
     *
     *     You can find the music ID using the `Video / Short Details` endpoint. It will be in the response inside the url at 'panels[-1].engagementPanelSectionListRenderer.content.richGridRenderer.contents[0].continuationItemRenderer.continuationItemRenderer.continuationCommand.token'.
     *
     *     Depth 1 returns approx. 15 videos, Depth N returns approx. 15 * N videos.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_shorts / 10</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/music/id-to-shorts?id=4qmFsgKsARIRRkVzZnZfYXVkaW9fcGl2b3QaeENBRHlCVlVLUmhJM0NndGFZVGgwU1VsMlNWVlZkeElMV21FNGRFbEpka2xWVlhjYUMwWkhVRlJDWmtGMGQwNVJJZzRJOEtVREVnZ0lEQkNBZ2Nta0F4b0xSa2RRVkVKbVFYUjNUbEVvc096US12VDZyTG40QVdnQpoCHGJyb3dzZS1mZWVkRkVzZnZfYXVkaW9fcGl2b3Q%3D&depth=1&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_music_id_to_shorts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/youtube/video/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Video / Short Comments
     * @description <p style="font-size: 15px;">	Get comments for a specific Youtube video or short.
     *
     *     See the `cursor` query parameter below for information on how to manage pagination (fetch more comments).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/youtube/video/comments?id=cKkb5tperxc&cursor=&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["youtube_video_comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/user/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Posts
     * @description <p style="font-size: 15px;">	Fetch user posts from the user ID.
     *
     *     Returns `depth` * `chunk_size` results. Note: if no posts can be retrieved the cost is 1. See the `start_cursor` and `depth` query parameters below for information on how to manage pagination (fetch more posts).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_posts</b> units</h3><h4>API usage examples</h4>
     *
     *     - User does not exist:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - User is private:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - User exists and does not have posts:<br><b>-></b> 0 posts returned.<br>Cost: <b style="color: #E07A57;">1 unit</b>
     *
     *     - User exists, depth 5, chunk_size 10:<br><b>-></b> 50 posts returned.<br>Cost: <b style="color: #E07A57;">50 units</b>
     *
     *     - User exists, depth 5, chunk_size 10 and has only 15 posts:<br><b>-></b> 15 posts returned.<br>Cost: <b style="color: #E07A57;">15 units</b>
     *
     *     - User exists, depth 5, chunk_size 10 and has only 5 posts more recent than timestamp:<br><b>-></b> 5 posts returned.<br>Cost: <b style="color: #E07A57;">5 units</b>
     *
     *     <br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/user/posts?user_id=18428658&depth=1&oldest_timestamp=1666262030&chunk_size=10&start_cursor=&alternative_method=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_user_posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/user/basic-info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Basic Stats
     * @description <p style="font-size: 15px;">	Fetch basic user information from their user ID.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">4</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/user/basic-info?user_id=18428658&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_user_basic_stats"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/user/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Info
     * @description <p style="font-size: 15px;">	Fetch user info from their username.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">3</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/user/info?username=daviddobrik&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_user_info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/user/detailed-info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Detailed Info
     * @description <p style="font-size: 15px;">	Fetch detailed user info from their username.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">10</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/user/detailed-info?username=daviddobrik&backup_method=False&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_user_detailed_info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/user/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Follower Count
     * @description <p style="font-size: 15px;">	Fetch the number of followers from a user ID.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/user/followers?user_id=18428658&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_user_followers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/user/reels": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Reels
     * @description <p style="font-size: 15px;">	Fetch the user's reels from their user ID.
     *
     *     Depth 1 returns 10 results, depth N returns N * 10 results. See the `depth` and `cursor` query parameters below for information on how to manage pagination (fetch more reels).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_reels</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/user/reels?user_id=18428658&depth=1&include_feed_video=True&oldest_timestamp=1666262030&start_cursor=&chunk_size=10&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_user_reels"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/user/tagged-posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Tagged Posts
     * @description <p style="font-size: 15px;">	Fetch posts for which the given user ID has been tagged.
     *
     *     Each call returns the 10 most recent posts where the user has been tagged. See the `cursor` query parameter below for information on how to manage pagination (fetch more posts).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_posts</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/user/tagged-posts?user_id=325734299&cursor=&chunk_size=10&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_user_tagged_posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/post/details": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Info & Comments
     * @description <p style="font-size: 15px;">	Fetch post information and statistics from shortcode. Additionally, the 50 most recent comments in the post can be fetched.
     *
     *     N.B. = Video Play Counts (video_play_count) are the total number of views only for Instagram. Reels posted on both Instagram and Facebook, might show a higher amount of views when logged in, because it is the combination of Instagram and Facebook views. This API returns the Instagram only views.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2 + ceil(#comments_fetched / 5)</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/post/details?code=CjDN1tzMIjR&n_comments_to_fetch=0&fetch_play_count=True&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_post_info_and_comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/post/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Comments
     * @description <p style="font-size: 15px;">	Fetch post POPULAR (only ~ 15) or RECENT comments. Popular comments only can be fetched with empty cursor, no more are shown. Recent comments can be paginated over using the cursor.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/post/comments?media_id=3511510130787749851&cursor=&sorting=popular&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_post_comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/music/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Music Posts
     * @description <p style="font-size: 15px;">	Fetch posts from a music ID.
     *
     *     See the `cursor` query parameter below for information on how to manage pagination (fetch more posts).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_posts</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/music/posts?id=3473785566185564&cursor=&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_music_posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/instagram/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search
     * @description <p style="font-size: 15px;">	Fetch users, places and hashtags information from text.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">4</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/instagram/search?text=Cristiano Ronaldo&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["instagram_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/twitch/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Keyword Search
     * @description <p style="font-size: 15px;">	Fetch results (videos / channels / games) from a given keyword. Depth 1 returns approx. 15 results, depth N returns approx. N * 15 results.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">depth</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/twitch/search?keyword=magic&depth=1&type=videos&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["twitch_keyword_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/twitch/user/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Followers
     * @description <p style="font-size: 15px;">	Fetch the number of followers for the given channel.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/twitch/user/followers?username=hmatttv&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["twitch_user_followers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/reddit/keyword/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Keyword Search
     * @description <p style="font-size: 15px;">	Fetch posts from a given keyword with chosen filters</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/reddit/keyword/search?name=bitcoin&sort=relevance&period=hour&cursor=&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["keyword_search_reddit_keyword_search_get"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/reddit/subreddit/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Subreddit Posts
     * @description <p style="font-size: 15px;">	Fetch posts from a given subreddit with chosen filters.
     *
     *     See the `cursor` query parameter below for information on how to manage pagination (fetch more posts).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/reddit/subreddit/posts?name=SkincareAddiction&sort=new&period=hour&cursor=&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["reddit_subreddit_posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/reddit/post/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Comments
     * @description <p style="font-size: 15px;">	Fetch comments from a given post.
     *
     *     See the `cursor` query parameter below for information on how to manage pagination (fetch more comments).</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">1</b> unit</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/reddit/post/comments?permalink=/r/SkincareAddiction/comments/8pv3gg/ba_finished_my_5_month_course_of_accutane_just_in/&cursor=&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["reddit_post_comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/twitter/user/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Info
     * @description <p style="font-size: 15px;">	Get information of a user.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/twitter/user/info?name=elonmusk&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["twitter_user_info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/twitter/user/tweets": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Tweets
     * @description <p style="font-size: 15px;">	Fetch tweets for a user. Please note that the tweets are returned in the order decided by Twitter (not chronological). Moreover, not all of the users return the data because it would require login and the posts are not public. It works for most of the verified users.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">4</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/twitter/user/tweets?id=50393960&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["twitter_user_tweets"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/twitter/post/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Info
     * @description <p style="font-size: 15px;">	Get information and statistics from a Tweet from its ID.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">2</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/twitter/post/info?id=1694791112567967849&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["twitter_post_info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/threads/keyword/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Keyword Search
     * @description <p style="font-size: 15px;">	Fetch posts related to a certain keyword. The posts can be top or most recent.
     *
     *     NB: Threads returns only 10-20 posts at maximum per keyword. Run the API multiple times per day to get more posts.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_posts</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/threads/keyword/search?name=ferrari&sorting=0&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["threads_search_keyword"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/threads/user/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Search
     * @description <p style="font-size: 15px;">	Find users matching a given input string.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">4</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/threads/user/search?name=orlandomagic&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["threads_user_search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/threads/user/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Info
     * @description <p style="font-size: 15px;">	Get user detailed information using the user ID.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">4</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/threads/user/info?id=195178788&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["threads_user_info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/threads/user/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Posts
     * @description <p style="font-size: 15px;">	Fetch most recent posts for a user using the user ID.
     *
     *     NB: Threads returns at maximum the 20-30 most recent posts for a user.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_posts</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/threads/user/posts?id=195178788&chunk_size=10&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["threads_user_posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/threads/post/replies": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Info & Replies
     * @description <p style="font-size: 15px;">	Fetch the information and its replies to a post using its ID.
     *
     *     NB: Threads returns at maximum the 20-30 most popular replies to a posts.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">#returned_replies</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/threads/post/replies?id=3742087106786012244&shortcode=DPukGWujKxU&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["threads_post_replies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/snapchat/user/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Info
     * @description <p style="font-size: 15px;">	Get information of a user.</p><h3>  <u>API Pricing (per request)</u>: <b style="color: #E07A57;">3</b> units</h3><br><a style="font-size: 17px;" target="_blank" href="https://ensembledata.com/apis/snapchat/user/info?name=daviddobrik&token=YOUR_TOKEN_HERE">   <b>		<u>Try the API</u>   </b></a>
     */
    get: operations["snapchat_user_info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /**
     * CommentsSorting
     * @description An enumeration.
     * @enum {string}
     */
    CommentsSorting: "popular" | "recent";
    /** HTTPStatusResponse */
    HTTPStatusResponse: {
      /** Detail */
      detail: string;
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /**
     * MusicFilter
     * @description An enumeration.
     * @enum {string}
     */
    MusicFilter: "0" | "1" | "2";
    /**
     * MusicSorting
     * @description An enumeration.
     * @enum {string}
     */
    MusicSorting: "0" | "1" | "2" | "3" | "4";
    /**
     * SearchSorting
     * @description An enumeration.
     * @enum {string}
     */
    SearchSorting: "relevance" | "hot" | "new" | "top" | "comments";
    /**
     * SubredditSorting
     * @description An enumeration.
     * @enum {string}
     */
    SubredditSorting: "hot" | "new" | "top" | "rising";
    /**
     * Type
     * @description An enumeration.
     * @enum {string}
     */
    Type: "videos" | "channels" | "games";
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
    /**
     * Period
     * @description An enumeration.
     * @enum {string}
     */
    app__routers__reddit__Period:
      "hour" | "day" | "week" | "month" | "year" | "all";
    /**
     * Sorting
     * @description An enumeration.
     * @enum {string}
     */
    app__routers__threads__Sorting: "0" | "1";
    /**
     * Period
     * @description An enumeration.
     * @enum {string}
     */
    app__routers__tiktok__Period: "0" | "1" | "7" | "30" | "90" | "180";
    /**
     * Sorting
     * @description An enumeration.
     * @enum {string}
     */
    app__routers__tiktok__Sorting: "0" | "1" | "2";
    /**
     * Period
     * @description An enumeration.
     * @enum {string}
     */
    app__routers__youtube__Period:
      "overall" | "hour" | "today" | "week" | "month" | "year";
    /**
     * Sorting
     * @description An enumeration.
     * @enum {string}
     */
    app__routers__youtube__Sorting: "relevance" | "time" | "views" | "rating";
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  customer_get_usage: {
    parameters: {
      query: {
        /**
         * @description Date for which units usage has to be fetched
         * @example 2022-11-19
         */
        date: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  customer_get_usage_history: {
    parameters: {
      query: {
        /**
         * @description Last N days for which units usage history has to be fetched
         * @example 10
         */
        days: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_hashtag_search: {
    parameters: {
      query: {
        /**
         * @description Hashtag to search (input without #).
         * @example magic
         */
        name: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_full_hashtag_search: {
    parameters: {
      query: {
        /**
         * @description Hashtag to search (input without #).
         * @example nichie
         */
        name: string;
        /**
         * @description Filter out posts created more than N days ago.
         * @example 90
         */
        days: number;
        /**
         * @description If True, map the output to match the TikTok Web API. If False, the mapping is matches the mobile TikTok API.
         * @example true
         */
        remap_output?: boolean;
        /**
         * @description The endpont will stop fetching more posts once it reaches this cursor value (famous hashtags can return up to 4000-5000 posts, therefore, the cursor typically stops at 4000-5000).
         * @example 10000
         */
        max_cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_keyword_search: {
    parameters: {
      query: {
        /**
         * @description The keyword to search.
         * @example tesla
         */
        name: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
        /**
         * @description Only return posts more recent than the given period. The value corresponds to the number of days to filter on.
         * @example 1
         */
        period: components["schemas"]["app__routers__tiktok__Period"];
        /**
         * @description The posts are sorted by relevance if sorting=0, by most liked if sorting=1, most recent if sorting=2.
         * @example 0
         */
        sorting?: components["schemas"]["app__routers__tiktok__Sorting"];
        /**
         * @description Retrieve the posts as if in the specified country (US, FR, UK, DE, etc.)
         * @example us
         */
        country?: string;
        /**
         * @description Fetch only videos where the input keyword has to be exactly present in the video caption. If true, it returns 10 posts per request.
         * @example false
         */
        match_exactly?: boolean;
        /**
         * @description Whether to include extra statistics about the author of the post such as their following count, follower count, favoriting (likes) count etc.
         * @example false
         */
        get_author_stats?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Invalid country code */
      466: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_full_keyword_search: {
    parameters: {
      query: {
        /**
         * @description The keyword to search.
         * @example magic
         */
        name: string;
        /**
         * @description Only return posts more recent than the given period. The value corresponds to the number of days to filter on.
         * @example 1
         */
        period: components["schemas"]["app__routers__tiktok__Period"];
        /**
         * @description The posts are sorted by relevance if sorting=0, by most liked if sorting=1, most recent if sorting=2.
         * @example 0
         */
        sorting?: components["schemas"]["app__routers__tiktok__Sorting"];
        /**
         * @description Retrieve the posts as if in the specified country (US, FR, UK, DE, etc.)
         * @example us
         */
        country?: string;
        /**
         * @description Fetch only videos where the input keyword has to be exactly present in the video caption. ATTENTION: If match_exactly=True, the API cost is #returned_posts / 10
         * @example false
         */
        match_exactly?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Invalid country code */
      466: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_user_posts_from_username: {
    parameters: {
      query: {
        /**
         * @description Username of the user.
         * @example daviddobrik
         */
        username: string;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth: number;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `start_cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        start_cursor?: number;
        /**
         * @description This parameter is used as a stopping condition for fetching posts. If a post older than the provided `oldest_createtime` is found, the system will stop fetching posts and return the results. For instance, if depth is 10, the system will aim to send 10 requests. However, if an `oldest_createtime` is set, and we find a post which is older than the `oldest_createtime`, the system will not send any more requests and return the results. Note: we do not filter out posts older than the provided `oldest_createtime` before returning the results. Please do this filtering in your own integration if required.
         * @example 1667843879
         */
        oldest_createtime?: number;
        /**
         * @description Set to True to enable an alternate version of the TikTok API that returns only the essential fields, resulting in a faster response.
         * @example false
         */
        new_version?: boolean;
        /**
         * @description When new_version=True, set this parameter to True to have the API include the cookie_download field within the video object, which is required for downloading content via the play or download URLs. This will NOT consume more units.
         * @example false
         */
        download_video?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Invalid username or user id */
      463: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Profile not available in region */
      474: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_user_posts_from_secuid: {
    parameters: {
      query: {
        /**
         * @description The user's secondary user ID.
         * @example MS4wLjABAAAAQ45IcDZIqrknyl0FDjs7xDlcxlaRE7CcBx1ENxYkWK00UpeKTTlCQWKxq6t9QM6b
         */
        secUid: string;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth: number;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `start_cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        start_cursor?: number;
        /**
         * @description This parameter is used as a stopping condition for fetching posts. If a post older than the provided `oldest_createtime` is found, the system will stop fetching posts and return the results. For instance, if depth is 10, the system will aim to send 10 requests. However, if an `oldest_createtime` is set, and we find a post which is older than the `oldest_createtime`, the system will not send any more requests and return the results. Note: we do not filter out posts older than the provided `oldest_createtime` before returning the results. Please do this filtering in your own integration if required.
         * @example 1667843879
         */
        oldest_createtime?: number;
        /**
         * @description Set to True to enable an alternate version of the TikTok API that returns only the essential fields, resulting in a faster response.
         * @example false
         */
        new_version?: boolean;
        /**
         * @description When new_version=True, set this parameter to True to have the API include the cookie_download field within the video object, which is required for downloading content via the play or download URLs. This will NOT consume more units.
         * @example false
         */
        download_video?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Profile not available in region */
      474: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_user_info_from_username: {
    parameters: {
      query: {
        /**
         * @description The username to fetch info for.
         * @example daviddobrik
         */
        username: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Invalid username or user id */
      463: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_user_info_from_secuid: {
    parameters: {
      query: {
        /**
         * @description The secondary user ID to fetch info for.
         * @example MS4wLjABAAAAQ45IcDZIqrknyl0FDjs7xDlcxlaRE7CcBx1ENxYkWK00UpeKTTlCQWKxq6t9QM6b
         */
        secUid: string;
        /**
         * @description Use an alternative endpoint for fetching the data. If true, the returned JSON contains some additional information compared to the default method.
         * @example false
         */
        alternative_method?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_user_search: {
    parameters: {
      query: {
        /**
         * @description Keyword to search users from.
         * @example daviddobrik
         */
        keyword: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_post_info: {
    parameters: {
      query: {
        /**
         * @description The url of the post containing the username and video ID. You should be able to copy this value directly from the search bar in your browser.
         * @example https://www.tiktok.com/@daviddobrik/video/7165262254722534698
         */
        url: string;
        /**
         * @description Set to True to enable an alternate version of the TikTok API that returns only the essential fields, resulting in a faster response.
         * @example false
         */
        new_version?: boolean;
        /**
         * @description When new_version=True, set this parameter to True to have the API include the cookie_download field within the video object, which is required for downloading content via the play or download URLs. This will NOT consume more units.
         * @example false
         */
        download_video?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Invalid url */
      462: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_multi_post_info: {
    parameters: {
      query: {
        /**
         * @description Aweme IDs (Post IDs) separated by semicolons as shown in the example.
         * @example 7210531475052236078;7102806710334606597;710280671033460623434597
         */
        ids: string;
        /**
         * @description Set to True to enable an alternate version of the TikTok API that returns only the essential fields, resulting in a faster response.
         * @example false
         */
        new_version?: boolean;
        /**
         * @description When new_version=True, set this parameter to True to have the API include the cookie_download field within the video object, which is required for downloading content via the play or download URLs. This will NOT consume more units.
         * @example false
         */
        download_video?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Maximum number of post IDs exceed */
      464: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_post_comments: {
    parameters: {
      query: {
        /**
         * @description The aweme ID of the post (post ID).
         * @example 7348608161672187167
         */
        aweme_id: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_post_comment_replies: {
    parameters: {
      query: {
        /**
         * @description The aweme ID of the post (post ID).
         * @example 7348608161672187167
         */
        aweme_id: string;
        /**
         * @description The id of the comment to fetch replies for.
         * @example 7348609743096988422
         */
        comment_id: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_music_search: {
    parameters: {
      query: {
        /**
         * @description The music string to base the search on.
         * @example fix%20you
         */
        name: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
        /**
         * @description Sort posts using a metric. 0=relevance, 1=most_used, 2=most_recent, 3=shortest, 4=longest.
         * @example 0
         */
        sorting?: components["schemas"]["MusicSorting"];
        /**
         * @description Filter posts by some value. 0=No filter applied, 1=search only titles, 2=search only creators.
         * @example 0
         */
        filter_by?: components["schemas"]["MusicFilter"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_music_posts: {
    parameters: {
      query: {
        /**
         * @description The id for the piece of music.
         * @example 7063948643480488709
         */
        music_id: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_music_details: {
    parameters: {
      query: {
        /**
         * @description Music ID whose information has to be fetched.
         * @example 7063948643480488709
         */
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_user_followers: {
    parameters: {
      query: {
        /**
         * @description The id of the user.
         * @example 6784819479778378757
         */
        id: string;
        /**
         * @description The secondary id of the user.
         * @example MS4wLjABAAAAQ45IcDZIqrknyl0FDjs7xDlcxlaRE7CcBx1ENxYkWK00UpeKTTlCQWKxq6t9QM6b
         */
        secUid: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
        /**
         * @description Secondary cursor to manage pagination (initially empty). The `page_token` for next request is returned by the previous response as the `nextPageToken`. This works in the same way as the `cursor` parameter.
         * @example
         */
        page_token?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_user_followings: {
    parameters: {
      query: {
        /**
         * @description The id of the user.
         * @example 6784819479778378757
         */
        id: string;
        /**
         * @description The secondary id of the user.
         * @example MS4wLjABAAAAQ45IcDZIqrknyl0FDjs7xDlcxlaRE7CcBx1ENxYkWK00UpeKTTlCQWKxq6t9QM6b
         */
        secUid: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
        /**
         * @description Secondary cursor to manage pagination (initially empty). The `page_token` for next request is returned by the previous response as the `nextPageToken`. This works in the same way as the `cursor` parameter.
         * @example
         */
        page_token?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_user_liked_posts: {
    parameters: {
      query: {
        /**
         * @description The secondary id of the user.
         * @example MS4wLjABAAAAzdgqSwTVcRLGFPY7J-JnwnH3QQQ8sozmxYSmE5Fxeuql6jjokm5Lui0tl_WrDYWD
         */
        secUid: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  tiktok_lives_search: {
    parameters: {
      query: {
        /**
         * @description The keyword from which to search for Tiktok live posts.
         * @example magic
         */
        keyword: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example 0
         */
        cursor?: number;
        /**
         * @description Retrieve the lives posts as if in the specified country (US, FR, UK, DE, etc.). If country is not empty string, 1 more unit gets charged.
         * @example us
         */
        country?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Invalid country code */
      466: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_keyword_search: {
    parameters: {
      query: {
        /**
         * @description The keyword to base the search on.
         * @example magic
         */
        keyword: string;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth: number;
        /**
         * @description If no `start cursor` is specified, it fetches the results from the 'All' category on the Youtube search. Other cursors can be fetched by first sending a request to our `Featured Categories Search` endpoint.
         * @example
         */
        start_cursor?: string;
        /**
         * @description Time filter to return only videos from a certain time period (overall, this hour, today, this week, this month, This year).
         * @example overall
         */
        period?: components["schemas"]["app__routers__youtube__Period"];
        /**
         * @description Sort results based on a parameter (relevance, upload time, view count, rating).
         * @example relevance
         */
        sorting?: components["schemas"]["app__routers__youtube__Sorting"];
        /**
         * @description Fetch additional info for the video (number of subscribers, likes and comments) and channel owner. 1 extra unit is charged per video.
         * @example false
         */
        get_additional_info?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_featured_categories_search: {
    parameters: {
      query: {
        /**
         * @description The keyword to base the search of the suggested categories on.
         * @example magic
         */
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_hashtag_search: {
    parameters: {
      query: {
        /**
         * @description The hashtag to base the search on.
         * @example magic
         */
        name: string;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth: number;
        /**
         * @description If true, only fetches shorts.
         * @example false
         */
        only_shorts?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_channel_detailed_info: {
    parameters: {
      query: {
        /**
         * @description Channel ID.
         * @example UCnQghMm3Z164JFhScQYFTBw
         */
        browseId: string;
        /**
         * @description if true, the `browseId` needs to be a url like youtube.com/@... OR youtube.com/channel/... OR youtube.com/c/.... If True, 1 extra unit is charged.
         * @example false
         */
        from_url?: boolean;
        /**
         * @description Fetch additional information for the channel (title, avatars, thumbails...) If True, 1 extra unit is charged.
         * @example false
         */
        get_additional_info?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Invalid Youtube URL */
      465: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description User restricted */
      471: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_channel_videos: {
    parameters: {
      query: {
        /**
         * @description Channel ID.
         * @example UCnQghMm3Z164JFhScQYFTBw
         */
        browseId: string;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_channel_shorts: {
    parameters: {
      query: {
        /**
         * @description Channel ID.
         * @example UClAa0YLrW4MaIKOWaeZR9Xg
         */
        browseId: string;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_channel_streams: {
    parameters: {
      query: {
        /**
         * @description Channel ID.
         * @example UChBQgieUidXV1CmDxSdRm3g
         */
        browseId: string;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_video_details: {
    parameters: {
      query: {
        /**
         * @description Youtube short or video ID.
         * @example 9lhtFHpNfms
         */
        id: string;
        /**
         * @description If true, Uses a different method to fetch the statistics for the Youtube short or video. The response JSON will differ from the default method.
         * @example false
         */
        alternative_method?: boolean;
        /**
         * @description If true, fetches the number of subscribers for the channel owner of the video. 1 additional unit is charged.
         * @example false
         */
        get_subscribers_count?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_channel_subscribers: {
    parameters: {
      query: {
        /**
         * @description Channel ID.
         * @example UCnQghMm3Z164JFhScQYFTBw
         */
        browseId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_channel_username_to_id: {
    parameters: {
      query: {
        /**
         * @description Channel username.
         * @example daviddobrik
         */
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_channel_id_to_username: {
    parameters: {
      query: {
        /**
         * @description Channel ID.
         * @example UCX6OQ3DkcsbYNE6H8uQQuVA
         */
        browseId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_music_id_to_shorts: {
    parameters: {
      query: {
        /**
         * @description Music ID.
         * @example 4qmFsgKsARIRRkVzZnZfYXVkaW9fcGl2b3QaeENBRHlCVlVLUmhJM0NndGFZVGgwU1VsMlNWVlZkeElMV21FNGRFbEpka2xWVlhjYUMwWkhVRlJDWmtGMGQwNVJJZzRJOEtVREVnZ0lEQkNBZ2Nta0F4b0xSa2RRVkVKbVFYUjNUbEVvc096US12VDZyTG40QVdnQpoCHGJyb3dzZS1mZWVkRkVzZnZfYXVkaW9fcGl2b3Q%3D
         */
        id: string;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  youtube_video_comments: {
    parameters: {
      query: {
        /**
         * @description video or short ID.
         * @example cKkb5tperxc
         */
        id: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example
         */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_user_posts: {
    parameters: {
      query: {
        /**
         * @description ID of the user.
         * @example 18428658
         */
        user_id: number;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth: number;
        /**
         * @description This parameter is used as a stopping condition for fetching posts. If a post older than the provided `oldest_timestamp` is found, the system will stop fetching posts and return the results. For instance, if depth is 10, the system will aim to send 10 requests. However, if an `oldest_timestamp` is set, and we find a post which is older than the `oldest_timestamp`, the system will not send any more requests and return the results. Note: we do not filter out posts older than the provided `oldest_timestamp` before returning the results. Please do this filtering in your own integration if required.
         * @example 1666262030
         */
        oldest_timestamp?: number;
        /**
         * @description The number of posts to fetch per depth. If alternative_method=False, the maximum allowed chunk_size is 20. If alternative_method=True, the maximum chunk_size is 12.
         * @example 10
         */
        chunk_size?: number;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `last_cursor` which can be used to retrieve the next page of results by sending it as the next `start_cursor`. If the `last_cursor` is not present in the response, it means that there are no more results to retrieve.
         * @example
         */
        start_cursor?: string;
        /**
         * @description If true, use a different method to fetch the user posts from the ID (this method returns at least 1 non pinned post when `start_cursor` is an empty string). The response JSON will be differ from the default method.
         * @example false
         */
        alternative_method?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description User restricted */
      471: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Private user */
      472: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description User not found */
      473: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Profile not available in region */
      474: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_user_basic_stats: {
    parameters: {
      query: {
        /**
         * @description ID of the user.
         * @example 18428658
         */
        user_id: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description User restricted */
      471: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description User not found */
      473: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_user_info: {
    parameters: {
      query: {
        /**
         * @description The user's username.
         * @example daviddobrik
         */
        username: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Invalid username or user id */
      463: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_user_detailed_info: {
    parameters: {
      query: {
        /**
         * @description The user's username.
         * @example daviddobrik
         */
        username: string;
        /**
         * @description If true, use a different method to fetch the detailed info. The response JSON will be differ from the default method. It costs 4 units only.
         * @example false
         */
        backup_method?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description User restricted */
      471: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description User not found */
      473: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_user_followers: {
    parameters: {
      query: {
        /**
         * @description ID of the user.
         * @example 18428658
         */
        user_id: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_user_reels: {
    parameters: {
      query: {
        /**
         * @description User ID.
         * @example 18428658
         */
        user_id: number;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth: number;
        /**
         * @description If true, also includes videos posted in user feed.
         * @example true
         */
        include_feed_video?: boolean;
        /**
         * @description This parameter is used as a stopping condition for fetching posts. If a post older than the provided `oldest_timestamp` is found, the system will stop fetching posts and return the results. For instance, if depth is 10, the system will aim to send 10 requests. However, if an `oldest_timestamp` is set, and we find a post which is older than the `oldest_timestamp`, the system will not send any more requests and return the results. Note: we do not filter out posts older than the provided `oldest_timestamp` before returning the results. Please do this filtering in your own integration if required.
         * @example 1666262030
         */
        oldest_timestamp?: number;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `start_cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example
         */
        start_cursor?: string;
        /**
         * @description The number of reels to fetch per `depth`.
         * @example 10
         */
        chunk_size?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_user_tagged_posts: {
    parameters: {
      query: {
        /**
         * @description User ID.
         * @example 325734299
         */
        user_id: number;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example
         */
        cursor?: string;
        /**
         * @description Number of posts to fetch per request.
         * @example 10
         */
        chunk_size?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_post_info_and_comments: {
    parameters: {
      query: {
        /**
         * @description Shortcode of the post.
         * @example CjDN1tzMIjR
         */
        code: string;
        /**
         * @description How many comments to fetch per post (max allowed is 50).
         * @example 0
         */
        n_comments_to_fetch?: number;
        /**
         * @description For videos, we need to fetch the `video_play_count` separately because Instagram does not return it with the post information. By default, we fetch this data, which adds a little extra processing time. If you want your request to be returned faster without the `video_play_count`, set this parameter to `False`.
         * @example true
         */
        fetch_play_count?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_post_comments: {
    parameters: {
      query: {
        /**
         * @description Media ID can be found using the other APIs.
         * @example 3511510130787749851
         */
        media_id: number;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example
         */
        cursor: string;
        /**
         * @description Fetch TOP comments (only 15 allowed) OR RECENT (start from most recent and iterate)
         * @example popular
         */
        sorting: components["schemas"]["CommentsSorting"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_music_posts: {
    parameters: {
      query: {
        /**
         * @description Music ID.
         * @example 3473785566185564
         */
        id: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example
         */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  instagram_search: {
    parameters: {
      query: {
        /**
         * @description Text to search.
         * @example Cristiano Ronaldo
         */
        text: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  twitch_keyword_search: {
    parameters: {
      query: {
        /**
         * @description Keyword to be searched.
         * @example magic
         */
        keyword: string;
        /**
         * @description Abstraction of the API pagination. Depth 1 returns X results, depth N returns N * X results. Note that the exact number of results per depth (X) may differ per endpoint. Please refer to the specific endpoint description for more information.
         * @example 1
         */
        depth: number;
        /**
         * @description Type of results to show.
         * @example videos
         */
        type: components["schemas"]["Type"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  twitch_user_followers: {
    parameters: {
      query: {
        /**
         * @description Name of the channel.
         * @example hmatttv
         */
        username: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  keyword_search_reddit_keyword_search_get: {
    parameters: {
      query: {
        /**
         * @description Keyword to search
         * @example bitcoin
         */
        name: string;
        /**
         * @description Type of posts to fetch
         * @example relevance
         */
        sort: components["schemas"]["SearchSorting"];
        /**
         * @description Time filter
         * @example hour
         */
        period: components["schemas"]["app__routers__reddit__Period"];
        /** @example  */
        cursor: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  reddit_subreddit_posts: {
    parameters: {
      query: {
        /**
         * @description Subreddit to be searched.
         * @example SkincareAddiction
         */
        name: string;
        /**
         * @description Type of posts to fetch.
         * @example new
         */
        sort: components["schemas"]["SubredditSorting"];
        /**
         * @description ATTENTION: The time filter applies only to sort type 'top'.
         * @example hour
         */
        period: components["schemas"]["app__routers__reddit__Period"];
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example
         */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Topic restricted */
      469: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  reddit_post_comments: {
    parameters: {
      query: {
        /**
         * @description Post permalink found from the other API.
         * @example /r/SkincareAddiction/comments/8pv3gg/ba_finished_my_5_month_course_of_accutane_just_in/
         */
        permalink: string;
        /**
         * @description Parameter to manually handle pagination. Each response contains a `nextCursor` which can be used to retrieve the next page of results by sending it as the next `cursor`. If the `nextCursor` is not present in the response, it means that there are no more results to retrieve.
         * @example
         */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  twitter_user_info: {
    parameters: {
      query: {
        /**
         * @description Username.
         * @example elonmusk
         */
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  twitter_user_tweets: {
    parameters: {
      query: {
        /**
         * @description User ID.
         * @example 50393960
         */
        id: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  twitter_post_info: {
    parameters: {
      query: {
        /**
         * @description Tweet ID.
         * @example 1694791112567967700
         */
        id: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  threads_search_keyword: {
    parameters: {
      query: {
        /**
         * @description Keyword to search.
         * @example ferrari
         */
        name: string;
        /**
         * @description The posts returned are TOP if sorting=0, or most RECENT if sorting=1
         * @example 0
         */
        sorting?: components["schemas"]["app__routers__threads__Sorting"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  threads_user_search: {
    parameters: {
      query: {
        /**
         * @description Name of the user to search.
         * @example orlandomagic
         */
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  threads_user_info: {
    parameters: {
      query: {
        /**
         * @description User ID.
         * @example 195178788
         */
        id: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  threads_user_posts: {
    parameters: {
      query: {
        /**
         * @description User ID.
         * @example 195178788
         */
        id: number;
        /**
         * @description How many posts to fetch with the request.
         * @example 10
         */
        chunk_size?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  threads_post_replies: {
    parameters: {
      query: {
        /**
         * @description Post ID.
         * @example 3742087106786012000
         */
        id: number;
        /**
         * @description You can use the Post Shortcode instead of the ID. In this case, input any integer in the ID parameter.
         * @example DPukGWujKxU
         */
        shortcode?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
  snapchat_user_info: {
    parameters: {
      query: {
        /**
         * @description Username.
         * @example daviddobrik
         */
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful Response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
      /** @description Token not found */
      491: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Email not verified */
      492: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Subscription expired */
      493: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description All daily units used */
      495: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
      /** @description Something went wrong */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["HTTPStatusResponse"];
        };
      };
    };
  };
}
