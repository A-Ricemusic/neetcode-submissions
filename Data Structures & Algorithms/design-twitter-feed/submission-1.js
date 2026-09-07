


/*
n = total amount of tweets => since capped at 10 per user => o(1) space
m = total amount of users
space: o(m)
*/
class Twitter {
    constructor() {
        this.followMap = new Map();
        this.tweets = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     * n = amount of tweets user had => 10
     * o(n) => o(10) => o(1)
     */
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, [])
        }
        this.tweets.get(userId).push([this.time,tweetId])
        if (this.tweets.get(userId).length > 10) {
            this.tweets.get(userId).shift() 
        }
        this.time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     * n = amount of followers user has
     * m = amount of tweets follower had => 10
     * time: o(n * 10 * log(10)) => o(n)
     */
    getNewsFeed(userId) {
        const minHeap = new PriorityQueue((a,b) => a[0] - b[0])
        const usersTweets = this.tweets.get(userId) ?? [];
        for (const tw of usersTweets) {
            minHeap.enqueue(tw);
            if (minHeap.size() > 10) {
                minHeap.dequeue();
            }
        }

        for (const flw of this.followMap.get(userId) ?? []) {
            const flwTweets = this.tweets.get(flw)
            for (const tw of flwTweets) {
                minHeap.enqueue(tw);
                if (minHeap.size() > 10) {
                    minHeap.dequeue();
                }
            }
        }

        
        let res = []
        while (!minHeap.isEmpty()) {
            res.push(minHeap.dequeue()[1])
        }
        res.reverse()
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     * 
     * time: o(1)
     */
    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        };
        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     * 
     * time: o(1)
     */
    unfollow(followerId, followeeId) {
        this.followMap.get(followerId)?.delete(followeeId)
    }
}
