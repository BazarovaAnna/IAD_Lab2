package app.model;
public class Point {
    private double x;

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getIsInArea() {
        return isInArea;
    }

    public void setIsInArea() {
        if (
                (x < -4 || x > 4) || (y < -5 || y > 3) || (r < 1 || r > 3)
        ) {
            this.isInArea = "inv operands";
        } else {
            if (    (x >= 0 && y >= 0 && (x*x+y*y)<=r*r) ||
                    (x <= 0 && y >= 0 && Math.abs(x)<=(r/2) && y<=r) ||
                    (x <= 0 && y <= 0 && y>=-x-r)
            ){
                this.isInArea = "true";
            } else this.isInArea = "false";
        }
    }

    private double y;
    private double r;
    private String isInArea;

    public Point(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
}