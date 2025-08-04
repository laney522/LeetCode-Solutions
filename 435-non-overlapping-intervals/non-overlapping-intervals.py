class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0

        # 1. 끝나는 시간을 기준으로 정렬
        intervals.sort(key=lambda x: x[1])

        count = 0  # 제거할 구간 개수
        end = intervals[0][1]  # 첫 번째 구간의 끝나는 시간

        for i in range(1, len(intervals)):
            # 현재 구간의 시작 시간이 이전 구간의 끝보다 작으면 겹침
            if intervals[i][0] < end:
                count += 1  # 겹치므로 제거해야 함
            else:
                end = intervals[i][1]  # 겹치지 않으면 end를 갱신

        return count
