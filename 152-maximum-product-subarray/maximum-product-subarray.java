class Solution {
    public int maxProduct(int[] nums) { 
        int n = nums.length ; 
        int LeftP = 1 ;
        int RightP = 1 ;
        int maxi = nums[0] ;

//checking for left to right
        for(int i = 0 ; i < n ; i++){
            RightP *= nums[i] ;
            maxi = Math.max(maxi , RightP) ;

            if(RightP == 0) RightP = 1 ; // check if the Product became 0 
        }

//checking for right to left
        for(int i = n-1 ; i>=0 ; i--){
            LeftP *= nums[i] ;
            maxi = Math.max(maxi , LeftP) ;

            if(LeftP == 0 ) LeftP = 1 ; // check if the Product became 0 
        }

        return maxi ; 

    }
}