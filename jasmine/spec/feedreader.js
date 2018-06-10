/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All tests are within the $() function,
 * since some of these tests may require DOM elements. The tests must only run
 * when the DOM is ready.
 */
$(function() {
    /* This test suite contains a related set of tests to work with the
     * allFeeds variable.
     */
    describe('RSS Feeds', function() {
        /* This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have a defined URL', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url.length).not.toBe(0);
            };
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have a defined name', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name.length).not.toBe(0);
            };
        });
    });

    /* This suite tests the hamburger menu's toggle functionality (hidden
     * by default, visible on click, hidden on next click) */

    describe('The Menu', function() {

        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This test ensures the menu changes
         * visibility when the menu icon is clicked.
         * The expectations are that the menu will display when
         * clicked and will hide when clicked again.
         */
        it('is visible when hidden and then clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });

        it('is hidden when visible and then clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* The "Initial Entries" suite checks that the feed contains
     * at least one entry and isn't empty
     */

    describe('Initial Entries', function() {

        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            //load the first feed, async method
            loadFeed(0, done);
        });

        //checks to make sure that the feed contains at least one entry and is //thus not 0
        it('contains at least one entry element', function() {
            expect($('.feed .entry').length).not.toBe(0);
        })
    });

    /* A test suite named "New Feed Selection"
     */

    describe('New Feed Selection', function() {
        var firstFeed;
        var secondFeed;

        /* This test ensures that the content actually changes
         * when a new feed is loaded by the loadFeed function.
         * beforeEach() is an async call
         */

        beforeEach(function(done) {
            loadFeed(0, function() { //load the first feed
                firstFeed = $('.feed').html(); //assign the first feed's html to variable
                done();
            });
        });

        //compares the first loaded feed with the next (current)
        //loaded feed
        it('has new content', function(done) {
            loadFeed(1, function() { //load the second feed
                secondFeed = $('.feed').html(); //assign the second feed's html to variable
                expect(secondFeed).not.toEqual(firstFeed); //compare the feeds
                done();
            })
        });
    });
}());
