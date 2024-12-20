avgmark :: [Int] -> Float
avgmark [] = 0
avgmark marks = fromIntegral (sum marks) / fromIntegral (length marks)

disavgmarkstd :: [(String, Int, [Int])] -> IO ()
disavgmarkstd [] = return ()  
disavgmarkstd ((name, _, marks):students) = do
    let avg = avgmark marks
    putStrLn $ name ++ " has an average of " ++ show avg
    disavgmarkstd students

main :: IO ()
main = do
    let students = [("aravind", 1, [80, 92, 98]),
                    ("mithun", 2, [75, 90, 88]),
                    ("tony", 3, [90, 75, 97])]
    disavgmarkstd students

