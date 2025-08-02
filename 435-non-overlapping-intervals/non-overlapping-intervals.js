/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;

    // 1. Sort intervals by end time
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let end = intervals[0][1]; // The end of the first interval

    for (let i = 1; i < intervals.length; i++) {
        // 2. If the current interval overlaps, we need to remove it
        if (intervals[i][0] < end) {
            count++; // Overlapping, so we increase the count of removals
        } else {
            // 3. No overlap, update the end
            end = intervals[i][1];
        }
    }

    return count;
};
