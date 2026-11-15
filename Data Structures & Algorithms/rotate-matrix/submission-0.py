class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        l, r = 0, len(matrix)-1

        while l < r:
            for i in range(r-l):
                top, bottom = l, r

                #save top left
                topLeft = matrix[top][l + i]

                #Rotate bottom left to top left
                matrix[top][l + i] = matrix[bottom - i][l]

                #Rotate bottom right into bottom left
                matrix[bottom - i][l] = matrix[bottom][r - i]

                #Rotate top right into bottom right
                matrix[bottom ][r - i] = matrix[top + i][r]

                #Rotate topLeft into top right
                matrix[top + i][r] = topLeft


            l += 1
            r -= 1